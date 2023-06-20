<?php

namespace App\Services\Order;

use App\Facades\CartService;
use Illuminate\Support\Facades\DB;
use App\Models\Buyer;
use App\Models\Order;
use App\Services\Cart\Cart;
Use App\Models\OrderItem;

class Service{

    public function store($data) {
        try{
            DB::beginTransaction();

            $cart = CartService::getCartProducts();

            if (empty($cart))
                return response()->json(['message' => 'Корзина пустая'], 422);
            $addressId = $data['address_id'];
            unset($data['address_id']);
            $buyer = Buyer::firstOrCreate(['email' => $data['email']], $data);
            $order = $this->addOrder($cart, $buyer['id'], $addressId);
            $this->addOrderItems($cart, $order['id']);
            DB::commit();
            return $order;
        }
        catch(\Exception $ex){
            DB::rollBack();
            return $ex->getMessage();
        }
        return false;
        
    }

    public function addOrder($cart, $buyerId, $addressId) {
        $result = Order::create([
            'buyer_id' => $buyerId,
            'total_price' => $cart['totalPrice'],
            'payed' => 0,
            'picked_up' => 0,
            'address_id' => $addressId
        ]);

        return $result;
    }

    public function addOrderItems($cart, $orderId) {
        foreach ($cart['products'] as $cartItem) {
            OrderItem::create([
                'order_id' => $orderId,
                'product_id' => $cartItem['id'],
                'quantity' => $cartItem['quantity'],
                'total_price' => $cartItem['totalPrice'],
            ]);
        }
    }

    public function update($category, $data) {

        return $category;
    }

}