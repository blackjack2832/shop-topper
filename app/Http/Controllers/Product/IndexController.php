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
            $result['category'] = $category;
        }

        $count = $query->count();

        if(!empty($data['offset'])) {
            if($data['offset'] !== 0) {
                if($count <= $data['offset'])
                    return 0;
                $query->skip($data['offset']);
            }
        }

        if(!empty($data['limit'])) {
            $query->take($data['limit']);
        }

        $products = $query->get();

        if(!empty($products))
            $result['products'] = ProductResource::collection($products);
        else
            $result['products'] = 0;

        return $result;
    }
}
