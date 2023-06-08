<?php

namespace App\Http\Controllers\SiteControllers\ImageTypes;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Images\ImagesResource;
use App\Models\ImageType;
use App\Http\Resources\ImageTypes\ImageTypesResource;

class IndexController extends Controller
{
    public function __invoke($name)
    {
        $imageType = ImageType::where('name', "{$name}")->first();
        if(empty($imageType)){
            return response()->json(['message' => 'Такой категории изображений не существует'], 422); 
        }  
        return new ImageTypesResource($imageType);   
    }
}
