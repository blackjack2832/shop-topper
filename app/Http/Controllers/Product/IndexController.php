<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Services\Product\Service;
use App\Http\Resources\Product\ProductResource;

class IndexController extends Controller
{

    public function __invoke()
    {
        $products = Product::all();
        return ProductResource::collection($products);
    }
}
