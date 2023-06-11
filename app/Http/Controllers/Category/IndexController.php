<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Category\IndexRequest;

class IndexController extends Controller
{
    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        $query = Category::query();

        if(!empty($data['first'])){
            $query->first();
        }

        $categories = $query->get();
        return CategoryResource::collection($categories);
    }
}
