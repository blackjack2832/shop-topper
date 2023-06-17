<?php

namespace App\Http\Controllers\SiteControllers\About;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AddressSliderImage;
use App\Models\Category;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('pages.about');
    }
}
