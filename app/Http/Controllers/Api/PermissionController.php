<?php

namespace App\Http\Controllers\Api;

use App\Repositories\PermissionRepository;
use App\Base\RestApi;
use App\Common\Permission;

class PermissionController  extends  ApiController
{
    use RestApi;

    public function repository()
    {
        return PermissionRepository::class;
    }
    public function updatePermission()
    {
        \Artisan::call('router:permission');
        return $this->JsonOK("OK");
    }
}
