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
            $table->string('title', 256)->nullable();
            $table->string('module', 256)->nullable();
        });
        Schema::table($tableNames['roles'], function (Blueprint $table) {
            $table->string('title', 256)->nullable();
        });
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
    }
}
