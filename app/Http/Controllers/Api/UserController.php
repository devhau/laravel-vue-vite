<?php

namespace App\Http\Controllers\Api;

use App\Repositories\UserRepository;
use App\Base\RestApi;
use Illuminate\Http\Request;

class UserController  extends ApiController
{
    use RestApi;
    public function repository()
    {
        return UserRepository::class;
    }
    public function getPermission($id,  $guard_name, Request $request)
    {
        $allPermission = $this->modelRepository->getAllPermission($guard_name);
        $modules = $allPermission->groupBy('module');
        $allRoles = $this->modelRepository->getAllRole($guard_name);
        $userPermissions = $this->modelRepository->getPermissionByUserId($id, $guard_name);
        $userRoles = $this->modelRepository->getRoleByUserId($id, $guard_name);
        return $this->JsonOK([
            'userRoles' => $userRoles,
            'userPermissions' => $userPermissions,
            'allRoles' => $allRoles,
            'modules' => $modules,
        ]);
    }
    public function putPermission($id, Request $request)
    {
        $userPermissions = $request->input('userPermissions');
        $userRoles = $request->input('userRoles');
        $guard_name = $request->input('guardName');
        return $this->JsonOK($this->modelRepository->syncPermission($id, $userRoles, $userPermissions, $guard_name) ? 'OK' : 'fails');
    }
}
