<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Cart\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Services\Cart\Cart;

class AllController extends Controller
{
    public function __invoke()
    {
        return OrderResource::collection(Order::all());
    }
}
