<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Services\Cart\Cart;

class IndexController extends Controller
{
    public function getCartItemsQuantity()
    {
        return CartService::getCartItemsQuantity();
    }

    public function getPage() {
        return view('pages.cart');
    }

    public function getCartProducts() {
        return CartService::getCartProducts();
    }
}
