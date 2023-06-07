<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use App\Services\Product\Service;

class DeleteController extends Controller
{

    public function __invoke(Category $category)
    {
        if(!empty($category->products)){
            $category->products()->delete();
        }

        $category->delete();
        return(true);
    }
}
