<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageType extends Model
{
    use HasFactory;

    public function images() {
        return $this->hasMany(Image::class, 'image_type_id', 'id');
    }
}
