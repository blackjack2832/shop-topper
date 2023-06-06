<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Category;

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
Auth::routes();
Route::get('/', function () {
    return view('welcome');
})->name('index');

Route::get('/admin', Main\IndexController::class)->middleware('auth')->middleware('admin')->name('admin.index');

Route::get('/admin/{page}', Main\IndexController::class)->where('page', '.*')->name('admin.index');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
