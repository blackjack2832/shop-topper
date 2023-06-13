<?php

namespace App\Services\Cart;

use App\Http\Resources\Product\ProductResource;
use App\Models\Product;
use Illuminate\Contracts\Session\Session;

use function PHPUnit\Framework\returnSelf;

class Cart {

    public function addToCartUnauthorizedUser($product1, $quantity = 1) {
        $quantity = trim($quantity);
        $product = $product1;
        $product['quantity'] = $quantity;
        $productPrice = $product['price'];
        $products = session()->get('cart.products');

        $this->checkRepeatProducts($products, $product, $quantity);
        $totalPrice = $this->calculatePrice($productPrice, $quantity, session()->get('cart.totalPrice'));

        session()->put('cart.totalPrice', $totalPrice);
        session()->put('cart.totalQuantity', session()->get('cart.totalQuantity') + $quantity);
        return session()->get('cart.totalQuantity');
    }

    public function removeFromCart($product) {
        $productId = $product['id'];
        $productFromCart = session()->get("cart.products.$productId");

        if (!empty($productFromCart)) {
            $totalPrice = session()->get('cart.totalPrice') - $productFromCart['totalPrice'];
            $totalQuantity = session()->get('cart.totalQuantity') - $productFromCart['quantity'];
            session()->forget("cart.products.$productId");
            session()->put('cart.totalQuantity', $totalQuantity);
            session()->put('cart.totalPrice', $totalPrice);
        }

        return session()->get('cart');
    }

    public function getCartProducts() {
        return session()->get('cart');
    }

    public function getCartItemsQuantity() {
        if (empty(session()->get('cart.totalQuantity'))) {
            return 0;
        }

        return session()->get('cart.totalQuantity');
    }


    /**
     * Метод для пересчёта итоговой цены в корзине
     */
    protected function calculatePrice ($productPrice, $quantity, $totalPrice) {
        
        if(empty($totalPrice) || $totalPrice == '')
            $totalPrice = 0;

        return $totalPrice += $productPrice * $quantity;
    }

    /**
     * Метод для проверки повторений товаров добавленных в корзину
     */
    protected function checkRepeatProducts($products, $product, $quantity) {
        $productId = $product['id'];

        if (!empty($products[$productId])) {
            $productQuantity = session()->get("cart.products.$productId.quantity");
            $product['quantity'] = $productQuantity + $quantity;   
        }

        $product['totalPrice'] = $product['quantity'] * $product['price'];

        session()->put("cart.products.$productId", $product);
    }

}