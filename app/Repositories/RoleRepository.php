<?php

namespace App\Repositories;

use App\Models\Permission;
use App\Models\Role;
use App\Base\BaseRepository;

class RoleRepository extends BaseRepository
{
    public function getFieldsSearchable()
    {
        return [];
    }
    public function getFieldsSearchableByName()
    {
        return ['name'];
    }
    public function model()
    {
        return Role::class;
    }
    public function getPermissionByRoleId($id, $guard_name)
    {
        if ($id > 0) {
            $role = $this->model->newQuery()->find($id);
            if ($role && $role->guard_name == $guard_name) {
                return $role->permissions->map(function ($item) {
                    return $item->name;
                }) ?? [];
            }
        }
        return [];
    }
    public function getAllPermission($guard_name)
    {
        return Permission::where('guard_name', $guard_name)->get();
    }
    public function getPermissionIn($permissions, $guard_name)
    {
        return Permission::where('guard_name', $guard_name)->whereIn('name', $permissions)->get();
    }
    public function syncPermissions($role_id, $permissions)
    {
        $model = $this->find($role_id);
        $model->syncPermissions($permissions);
    }
}
