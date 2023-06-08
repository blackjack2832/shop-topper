<?php

namespace App\Http\Controllers\SiteControllers\Sliders;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AddressSliderImage\AddressSliderImageResource;
use App\Http\Resources\Images\ImagesResource;
use App\Models\ImageType;
use App\Http\Resources\ImageTypes\ImageTypesResource;
use App\Http\Resources\MainSlider\MainSliderResource;
use App\Models\AddressSliderImage;

class AddressSliderController extends Controller
{
    public function __invoke()
    {
        $query = AddressSliderImage::query();
        return AddressSliderImageResource::collection($query->orderBy('order')->get());
    }
}
