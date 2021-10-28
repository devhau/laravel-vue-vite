<?php

namespace App\Models;

use Spatie\Permission\Models\Role as RoleBase;

class Role extends RoleBase
{
    public const SUPPER_ADMIN = "supper-admin";
    public const GUEST = "guest";
    protected function getDefaultGuardName(): string
    {
        return 'web';
    }
}
