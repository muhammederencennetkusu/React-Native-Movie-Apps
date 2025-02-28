<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;
use App\Models\Category;

class Movie extends Model
{
    use HasFactory;

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function movieCasts() {
        return $this->hasMany(MovieCast::class);
    }


    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
