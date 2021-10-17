<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnTitlePermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tableNames = config('permission.table_names');

        Schema::table($tableNames['permissions'], function (Blueprint $table) {
            $table->string('title', 256);
            $table->string('module', 256);
        });
        Schema::table($tableNames['roles'], function (Blueprint $table) {
            $table->string('title', 256);
        });
        Schema::table('users', function (Blueprint $table) {
            $table->string('full_name', 256);
        });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $tableNames = config('permission.table_names');

        Schema::table($tableNames['permissions'], function (Blueprint $table) {
            $table->dropColumn('title');
            $table->dropColumn('module');
        });
        Schema::table($tableNames['roles'], function (Blueprint $table) {
            $table->dropColumn('title');
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('full_name');
        });
        //
    }
}
