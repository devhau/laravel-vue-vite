<?php

namespace App\Http\Controllers\Api;

use App\Repositories\RoleRepository;
use App\Base\RestApi;
use Illuminate\Http\Request;

class RoleController extends ApiController
{
    use RestApi;
    public function repository()
    {
        return RoleRepository::class;
    }
    public function getPermission($id, $guard_name)
    {
        $permissions = $id ? $this->modelRepository->getPermissionByRoleId($id, $guard_name) : [];
        $all_permissions = $this->modelRepository->getAllPermission($guard_name);
        $modules = $all_permissions->groupBy('module');
        return $this->JsonOK([
            'permissions' => $permissions,
            'modules' => $modules,
        ]);
    }
    public function putPermission($id, Request $request)
    {
        $userPermissions = $request->input('permissions');
        return $this->JsonOK($this->modelRepository->syncPermissions($id,  $userPermissions) ? 'OK' : 'fails');
    }
    protected function storeAfter(Request $request, $input, $model)
    {
        $model->syncPermissions($input['permissions']);
    }
    protected function updateAfter(Request $request, $id, $input, $model)
    {
        $model->syncPermissions($input['permissions']);
    }
}
