<?php

namespace App\Http\Controllers\SiteControllers\Catalog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AddressSliderImage;
use App\Models\Category;
use App\Models\Product;

class SectionController extends Controller
{
    public function __invoke($category)
    {
        return view('pages.catalog');
    }
}
