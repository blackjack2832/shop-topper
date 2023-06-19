<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Models\Order;
use App\Services\Cart\Cart;

class ShowController extends Controller
{
    public function __invoke(Order $order)
    {
        return view('pages.newOrder', ['order' => $order['id']]);
    }
}
