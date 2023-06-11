<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request, Product $product)
    {
        $data = $request->validated();
        return CartService::addToCartUnauthorizedUser($product, $request->quantity);
    }
}
