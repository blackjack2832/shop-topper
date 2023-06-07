<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use App\Services\Product\Service;

class DeleteController extends Controller
{

    public function __invoke(Product $product)
    {
        $product->delete();
        return(true);
    }
}
