<?php

namespace App\Http\Controllers\SiteControllers\ProductDetail;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AddressSliderImage;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke(Product $product)
    {
        return view('pages.productCart');
    }
}
