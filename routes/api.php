<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'App\Http\Controllers\Category'], function() {
    Route::get('/category', IndexController::class);
    Route::get('/category/{category}', ShowController::class);
    Route::post('/category', StoreController::class);
    Route::patch('/category/{category}', UpdateController::class);
    Route::delete('/category/{category}', DeleteController::class);
});

Route::group(['namespace' => 'App\Http\Controllers\Product'], function() {
    Route::get('/product', IndexController::class)->name('product.index');
    Route::get('/product/{product}', ShowController::class)->name('product.index.id');
    Route::post('/product', StoreController::class)->name('product.store');
    Route::patch('/product/{product}', UpdateController::class)->name('product.update');
    Route::delete('/product/{product}', DeleteController::class)->name('product.delete');
});

Route::group(['namespace' => 'App\Http\Controllers\SiteControllers'], function() {
    Route::get('/images/main-slider', \Sliders\MainSliderController::class);
    Route::get('/images/address-slider', \Sliders\AddressSliderController::class);
    Route::get('/product/detail/{product}', \ProductDetail\GetController::class);
});

