<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Buyer\StoreRequest;
use App\Models\Product;
use App\Facades\CartService;
use App\Services\Cart\Cart;
use App\Services\Order\Service;
use Illuminate\Support\Facades\Mail;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $service = new Service();
        $result = $service->store($data);
        return $result;
    }
}
