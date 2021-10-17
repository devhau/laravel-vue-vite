<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller as BaseController;

class ApiController extends BaseController
{
    protected function JsonOK($data, $message = null, $code = 200)
    {
        return array('data' => $data, 'message' => $message, 'OK' => true, 'code' => $code);
    }
    protected function JsonErrors($errors, $message = null, $code = 405)
    {
        return array('errors' => $errors, 'message' => $message, 'OK' => false, 'code' => $code);
    }
}
