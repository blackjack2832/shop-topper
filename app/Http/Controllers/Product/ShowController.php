<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Services\Product\Service;
use App\Http\Resources\Product\ProductResource;

class ShowController extends Controller
{

    public function __invoke(Product $product)
    {
        return new ProductResource($product);
    }
}
