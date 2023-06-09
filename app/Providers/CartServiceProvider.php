<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CartServiceProvider extends ServiceProvider {

    public function register()
    {
        $this->app->bind('cart', 'App\Services\Cart\Cart');
    }
}