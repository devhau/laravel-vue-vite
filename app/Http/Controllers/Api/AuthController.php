<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class AuthController extends ApiController
{
    public function __construct()
    {
    }
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'name' => 'required',
        ]);
        User::create([
            'name' =>  $request->input('name'),
            'email' =>  $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10)
        ]);
        return $this->JsonOK('OK');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();
        $check = Hash::check($request->password, $user->password);
        if (!$user || !$check) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        if ($token = $user->createToken($request->device_name)->plainTextToken) {
            return response()->json(['status' => 'success', 'token' => $token], 200)->header('Authorization', $token);
        }
        return response()->json(['error' => 'login_error'], 401);
    }
    public function user(Request $request)
    {
        $user = $request->user();
        return $this->JsonOK([
            'user' => $user,
            'isAdmin' => $user->isSuperAdmin(),
            'permissions' => $user->getAllPermissions()->map(function ($item) {
                return $item->name;
            })
        ]);
    }
    public function changePassword(Request $request)
    {
        if ($request->input('password') != "") {
            $user = $request->user();
            $user->fill([
                'password' => Hash::make($request->input('password2')),
            ])->save();
            return $this->JsonOK('OK');
        } else {
            return $this->JsonErrors('Fails');
        }
    }
    public function logout(Request $request)
    {
        return $request->user()->currentAccessToken()->delete();
    }
}
