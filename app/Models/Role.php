<?php

namespace App\Models;

use Spatie\Permission\Guard;
use Spatie\Permission\Models\Role as RoleBase;

class Role extends RoleBase
{
    public const SUPPER_ADMIN = "supper-admin";
    public const GUEST = "guest";
    public $_GuardName;
    protected function getDefaultGuardName(): string
    {
        return $this->_GuardName ? $this->_GuardName :  Guard::getDefaultName($this);
    }
}
