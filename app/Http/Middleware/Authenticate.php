<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
use Illuminate\Support\Facades\Log;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (!$request->expectsJson()) {
            return route('login');
        }
    }
    public function handle($request, Closure $next, ...$guards)
    {
        /** @var \App\User $user */
        $user = $request->user();
        // Like: users.index
        $route = app()->router->getCurrentRoute()->getName();

        $guest_permission = config('permission.guest');
        // Hasn't permission
        if ((count($guest_permission) === 0 || !in_array($route, $guest_permission)) && !empty($user) && !$user->isSuperAdmin() && !empty($route) && !$user->hasPermissionTo($route)) {
            return abort(403);
        }
        return parent::handle($request, $next, ...$guards);
    }
}
