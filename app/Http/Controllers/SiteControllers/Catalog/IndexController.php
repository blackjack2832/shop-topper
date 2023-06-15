<?php

namespace App\Http\Controllers\SiteControllers\Catalog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AddressSliderImage;
use App\Models\Category;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke()
    {
        $section = Category::all()->first();

        if(empty($section)) 
            return redirect()->route('index');
        
        return redirect()->route('catalog.section', ['category' => $section['slug']]);
    }
}
