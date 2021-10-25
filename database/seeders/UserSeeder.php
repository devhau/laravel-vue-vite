<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use App\Repositories\RoleRepository;
use App\Repositories\PermissionRepository;
use App\Repositories\UserRepository;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /** @var  PermissionRepository */
    private $permissionRepository;
    /** @var  RoleRepository */
    private $roleRepository;
    /** @var  UserRepository */
    private $userRepository;

    public function __construct(RoleRepository $roleRepo, PermissionRepository $permissionRepo, UserRepository $userRepo)
    {
        $this->roleRepository = $roleRepo;
        $this->permissionRepository = $permissionRepo;
        $this->userRepository = $userRepo;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artisan::call('config:clear');
        // load permission from router name
        $exitCode = Artisan::call('router:permission');

        // Supper Admin
        $roleSupperAdmin = $this->roleRepository->create([
            'name' =>    Role::SUPPER_ADMIN,
            'title' => 'Supper Admin',
            'guard_name' => 'web'
        ]);

        $userSupperAdmin = $this->userRepository->create([
            'name' => 'Administrator',
            'email' => 'admin@hau.xyz',
            'password' => Hash::make('123@12'),
            'email_verified_at'=>now(),
        ]);
        $userSupperAdmin->assignRole($roleSupperAdmin);

        // Guest
        $roleGuest = $this->roleRepository->create([
            'name' =>    Role::GUEST,
            'title' => 'Guest',
            'guard_name' => 'web'
        ]);
        $userGuest = $this->userRepository->create([
            'name' => 'Guest',
            'email' => 'guest@hau.xyz',
            'password' => Hash::make('123@123'),
            'email_verified_at'=>now(),
        ]);
        $userGuest->assignRole($roleGuest);
        // Leader
        $roleLeader = $this->roleRepository->create([
            'name' =>    'leader',
            'title' => 'Leader',
            'guard_name' => 'web'
        ]);
        $usersPermissions = $this->permissionRepository->getListByName('users.%');
        $roleLeader->givePermissionTo($usersPermissions);
        $userLeader = $this->userRepository->create([
            'name' => 'Leader',
            'email' => 'leader@hau.xyz',
            'password' => Hash::make('123@123'),
            'email_verified_at'=>now(),
        ]);
        $userLeader->assignRole($roleLeader);
    }
}
