<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;
use App\Repositories\PermissionRepository;

class LoadPermissionFromRouter extends Command
{
    /** @var  PermissionRepository */
    private $permissionRepository;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'router:permission';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */

    public function __construct(PermissionRepository $permissionRepo)
    {
        $this->permissionRepository = $permissionRepo;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $routeCollection = Route::getRoutes();

        $guest_perrmissons = config('permission.guest_perrmission');
        foreach ($routeCollection as $value) {
            $name = $value->getName();
            $guard_name = '';
            // Only Auth, that's using perrmisson for router.
            $midd = $value->gatherMiddleware();
            if (in_array('api', $midd)) {
                $guard_name = "web";
            }
            $checkAuth = false;
            foreach ($midd as $item) {
                if ($item == 'auth' || $item == 'auth:sanctum') {
                    $checkAuth = true;
                    break;
                }
            }
            if ($name == "" || !$checkAuth) continue;
            $this->savePermissoion($name, $guard_name);
        }
        $extend_perrmission = config('permission.extend_perrmission');
        if (is_array($extend_perrmission) && count($extend_perrmission) > 0) {
            foreach ($extend_perrmission as $key => $items) {
                foreach ($items as $name) {
                    $this->savePermissoion($name, $key);
                }
            }
        }

        $this->info('The command router:permission was successful!');
        return 0;
    }
    private function savePermissoion($name, $guard_name_default = '')
    {
        $arrExcept = [
            'ignition',
            'login',
            'logout',
            'register',
            'password'
        ];
        $this->info($name);
        $arrName = explode('.', $name);
        $module = $arrName[0];
        $title = $name;
        if ($module == "api") {
            $module = $arrName[1];
        }
        $guard_name = "web";
        $checkModule = ($module != null && $module != "");
        if ($checkModule) {
            foreach ($arrExcept as $item) {
                if ($item == $module) {
                    $checkModule = false;
                    break;
                }
            }
        }

        if ($checkModule) {
            if ($guard_name_default != '') {
                $guard_name = $guard_name_default;
            }
            $checkModule = $this->permissionRepository->checkExists($name, $guard_name);
            if (!$checkModule) {
                $permission = [];
                $permission['name'] = $name;
                $permission['title'] = $title;
                $permission['module'] = $module;
                $permission['guard_name'] = $guard_name;
                $this->permissionRepository->create($permission);
            }
        }
    }
}
