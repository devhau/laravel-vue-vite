<?php

namespace App\Models;

use Spatie\Permission\Guard;
use Spatie\Permission\Models\Permission as PermissionBase;

class Permission extends PermissionBase
{
    public $_GuardName;
    protected function getDefaultGuardName(): string
    {
        return $this->_GuardName ? $this->_GuardName :  Guard::getDefaultName($this);
    }
}
