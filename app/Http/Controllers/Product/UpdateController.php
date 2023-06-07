<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use App\Services\Product\Service;

class UpdateController extends Controller
{

    public function __invoke(UpdateRequest $request, Product $product)
    {
        $data = $request->validated();
        $service = new Service();
        return $service->update($product, $data, $request->category_id); 
    }
}
