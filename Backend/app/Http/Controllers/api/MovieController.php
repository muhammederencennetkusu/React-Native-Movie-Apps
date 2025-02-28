<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Movie;
use App\Models\Notification;
use Illuminate\Http\Request;

class MovieController extends BaseController
{

    public function home(){
        $movies = Movie::with('images')->get()->map(function($item){
            $item['categories'] = Category::whereRaw('id REGEXP "(^|,)('.str_replace(',','|',$item->categoryIds).')(,|$)"')->get();
            return $item;
        });
        $notifications = Notification::orderBy('id','desc')->get();
        return $this->success("Film Listelendi", [
            'movies'=>$movies,
            'notifications'=>$notifications
        ]);
    }

    public function index(){
        $movies = Movie::with('images')->get()->map(function($item){
            $item['categories'] = Category::whereRaw('id REGEXP "(^|,)('.str_replace(',','|',$item->categoryIds).')(,|$)"')->get();
            return $item;
        });
        return $this->success("Film Listelendi", $movies);
    }

    public function detail($movieId){
        if(Movie::where('id',$movieId)->count() == 0) return $this->error('Film Bulunamadı');
        $movie = Movie::where('id',$movieId)->with('images')->with('movieCasts')->with('movieCasts.cast')->first();
        $categories = Category::whereRaw('id REGEXP "(^|,)('.str_replace(',','|',$movie->categoryIds).')(,|$)"')->get();
        return $this->success("Film Detayı Getirildi",[
            'data'=>$movie,
            'categories'=>$categories
        ]);
    }
}
