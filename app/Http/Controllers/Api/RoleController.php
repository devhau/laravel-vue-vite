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
        $modules = $all_permissions->groupBy('module_name');
        return $this->JsonOK([
            'permissions' => $permissions,
            'modules' => $modules,
        ]);
    }
    protected function storeAfter(Request $request, $input, $model)
    {
        $model->_GuardName = $model->guard_name;
        $model->syncPermissions($input['permissions']);
    }
    protected function updateAfter(Request $request, $id, $input, $model)
    {
        $model->_GuardName = $model->guard_name;
        $model->syncPermissions($input['permissions']);
    }
}
