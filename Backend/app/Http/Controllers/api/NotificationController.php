<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends BaseController
{
    public function index(){
        $notifications = Notification::orderBy('id','desc')->get();
        return $this->success("Bildirim Listelendi", $notifications);
    }
}
