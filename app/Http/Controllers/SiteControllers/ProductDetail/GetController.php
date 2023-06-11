<?php

namespace App\Http\Controllers\SiteControllers\ProductDetail;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\AddressSliderImage;
use App\Models\Product;

class GetController extends Controller
{
    public function __invoke(Product $product)
    {
        return new ProductResource($product);
    }
}
