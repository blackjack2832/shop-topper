<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Services\Product\Service;
use App\Http\Resources\Product\ProductResource;
use App\Http\Requests\Product\IndexRequest;

class IndexController extends Controller
{

    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        $query = Product::query();

        if(!empty($data['hit'])){
            $query->where('hit', $data['hit']);
        }
        if(!empty($data['category'])) {
            $category = Category::where('slug', $data['category'])->first();
            $query->where('category_id', $category->id);
        }
        $products = $query->get();
        
        return ProductResource::collection($products);
    }
}
