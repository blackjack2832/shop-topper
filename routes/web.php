<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Category;
use App\Http\Controllers\SiteControllers\ProductDetail;
use App\Http\Controllers\SiteControllers\Catalog;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/admin', Main\IndexController::class)->middleware('admin')->name('admin.index');

Route::get('/admin/{page}', Main\IndexController::class)->where('page', '.*')->name('admin.index');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Auth::routes();

Route::get('/product/detail/{product}', ProductDetail\IndexController::class)->name('product.detail');
Route::get('/catalog/{category}', Catalog\IndexController::class)->name('catalog.index');

Route::group(['namespace' => 'App\Http\Controllers\Cart'], function() {
    Route::get('/cart/products', [App\Http\Controllers\Cart\IndexController::class, 'getCartProducts']);
    Route::get('/cart', [\App\Http\Controllers\Cart\IndexController::class, 'getPage']);
    Route::get('/getCartItemsQuantity', [\App\Http\Controllers\Cart\IndexController::class, 'getCartItemsQuantity'])->name('cart.getQuantity');
    Route::post('/addToCart/{product}', StoreController::class)->name('cart.store');
    Route::delete('/cart/{product}', DeleteController::class);
});
