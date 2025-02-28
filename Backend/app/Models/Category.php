<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected static function boot()
    {
        parent::boot();

        // Lazy loading'i devre dışı bırak
        static::preventLazyLoading();
    }

    public function movies()
    {
        return $this->hasMany(Movie::class, 'category_id'); // 'category_id' alanı, Movie modelindeki ilişkiyi belirtir
    }
}
