<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Services\Cart\Cart;

class IndexController extends Controller
{
    public function __invoke()
    {
        $productsQuantity = CartService::getCartItemsQuantity();

        if($productsQuantity === 0) {
            return redirect()->route('index');
        }

        return view('pages.order');
    }
}
