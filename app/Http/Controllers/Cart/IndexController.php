<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;

class IndexController extends Controller
{
    public function getCartItemsQuantity()
    {
        return CartService::getCartItemsQuantity();
    }
}
