<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Services\Cart\Cart;

class DeleteController extends Controller
{
    public function __invoke(Product $product)
    {
        return CartService::removeFromCart($product);
    }
}
