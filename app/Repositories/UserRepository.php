<?php

namespace App\Repositories;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Base\BaseRepository;

class UserRepository extends BaseRepository
{
    public function getFieldsSearchable()
    {
        return ['name', 'email', 'created_at'];
    }
    public function getFieldsSearchableByName()
    {
        return ['name', 'email'];
    }
    public function model()
    {
        return User::class;
    }
    public function getAllPermission($guard_name)
    {
        if ($guard_name) {
            return Permission::where('guard_name', $guard_name)->get();
        }
        return Permission::all();
    }

    public function getAllRole($guard_name)
    {
        if ($guard_name) {
            return Role::where('guard_name', $guard_name)->get()->map(function ($item) {
                $item->permissions;
                return $item;
            });
        }
        return Role::all()->map(function ($item) {
            $item->permissions;
            return $item;
        });;
    }
    public function getPermissionByUserId($id, $guard_name)
    {
        if ($id > 0) {
            $user = $this->model->newQuery()->find($id);
            if ($user) {
                return $user->permissions->where('guard_name', $guard_name)->map(function ($item) {
                    return $item->name;
                }) ?? [];
            }
        }
        return [];
    }
    public function getRoleByUserId($id, $guard_name)
    {
        if ($id > 0) {
            $user = $this->model->newQuery()->find($id);
            if ($user) {
                return $user->roles->where('guard_name', $guard_name)->map(function ($item) {
                    return $item->name;
                }) ?? [];
            }
        }
        return [];
    }
    public function syncPermission($id, $roles, $permissions, $guard_name)
    {
        if ($id > 0) {
            $user = $this->model->newQuery()->find($id);
            if ($user) {
                if (!is_array($roles)) $roles = [$roles];
                if (!is_array($permissions)) $permissions = [$permissions];
                $user->FixGuardName = $guard_name;
                $user->syncRoles($roles);
                $user->syncPermissions($permissions);
                return true;
            }
        }
        return false;
    }
}
