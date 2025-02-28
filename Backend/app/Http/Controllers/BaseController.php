<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    /**
     * @param $message
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function success($message, $data = []): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status'=>true,
            'message'=>$message,
            'data'=>$data
        ]);
    }

    /**
     * @param $message
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function error($message, $data = []): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status'=>false,
            'message'=>$message,
            'data'=>$data
        ]);
    }
}
