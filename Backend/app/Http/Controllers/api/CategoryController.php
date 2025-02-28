<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Movie;
use Illuminate\Http\Request;
use \App\Http\Controllers\BaseController as BaseController;

class CategoryController extends BaseController
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(){
        $categories = Category::all();
        return $this->success("Kategori Listelendi", $categories);
    }

    /**
     * @param $categoryId
     * @return \Illuminate\Http\JsonResponse
     */
    public function detail($categoryId) {
        $category = Category::findOrFail($categoryId); // Kategoriyi getir
        $movies = Movie::where('categoryIds', $categoryId)->get(); // Moviesleri manuel çek

        return $this->success("Kategori Listelendi", [
            'category' => $category->toArray(), // Kategori bilgisi
            'movies' => $movies->toArray() // Filmleri dizi olarak döndür
        ]);
    }






}
