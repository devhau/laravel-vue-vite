<?php

namespace App\Repositories;

use App\Models\Permission;
use App\Base\BaseRepository;

class PermissionRepository extends BaseRepository
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
        return Permission::class;
    }
    public function checkExists($name, $guard_name)
    {
        return $this->allQuery([
            'name' => $name,
            'guard_name' => $guard_name
        ])->count() > 0;
    }
    public function getListByName($name, $guard_name = 'web')
    {
        return $this->allQuery([
            'guard_name' => $guard_name
        ])->where('name', 'like', $name)->get();
    }
}
