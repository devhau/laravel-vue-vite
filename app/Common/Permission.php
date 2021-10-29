<?php

namespace App\Common;

class Permission
{
    /**
     *
     */
    public static function getPermissions()
    {
        return (new \ReflectionClass(__CLASS__))->getConstants();
    }
    public const showHello = "custom.showHello";
}
