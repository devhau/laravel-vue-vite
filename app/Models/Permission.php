<?php

namespace App\Models;

use Spatie\Permission\Guard;
use Spatie\Permission\Models\Permission as PermissionBase;

class Permission extends PermissionBase
{
    protected function getDefaultGuardName(): string
    {
        return 'web';
    }
}
