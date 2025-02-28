<?php

use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\MovieController;
use App\Http\Controllers\api\NotificationController;
use App\Models\Notification as ModelsNotification;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category/{categoryId}', [CategoryController::class, 'detail']);
Route::get('/movies',[MovieController::class, 'index']);
Route::get('/home',[MovieController::class, 'home']);
Route::get('/movie/{movieId}',[MovieController::class, 'detail']);
Route::get('/notifications', [NotificationController::class, 'index']);
