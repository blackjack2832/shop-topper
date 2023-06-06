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
    Route::get('/categories', IndexController::class)->name('category.index');
    Route::post('/categories', StoreController::class)->name('category.store');
});

Route::group(['namespace' => 'App\Http\Controllers\Product'], function() {
    Route::get('/product', IndexController::class)->name('product.index');
    Route::post('/product', StoreController::class)->name('product.store');
});
