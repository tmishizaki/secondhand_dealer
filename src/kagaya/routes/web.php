<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index']);
Route::get('/item', [HomeController::class, 'item']);
Route::post('/purchase/customer', [HomeController::class, 'customerSend']);
Route::post('/purchase/item_image', [HomeController::class, 'itemImageSend']);
Route::get('/purchase/complete', [HomeController::class, 'purchaseComplete']);
Route::get('/purchase', [HomeController::class, 'purchase']);
//Route::get('/purchase/confirm', [HomeController::class, 'purchaseConfirm']);

Route::get('/company', [HomeController::class, 'company']);
Route::get('/owner', [HomeController::class, 'owner']);
Route::get('/contact', [HomeController::class, 'contact']);
Route::post('/contact/send', [HomeController::class, 'contactSend']);

Route::get('/admin', [AdminController::class, 'index']);
Route::get('/admin/login', [AdminController::class, 'login']);
Route::post('/admin/login', [AdminController::class, 'loginCheck']);

Route::get('/admin/logout', [AdminController::class, 'logout']);

Route::get('/admin/api/item/list', [AdminController::class, 'itemList']);
Route::post('/admin/api/item/status/{item_id}', [AdminController::class, 'statusUpdate']);
Route::get('/admin/api/item/{id}', [AdminController::class, 'getItem']);
Route::post('/admin/api/item/{id}', [AdminController::class, 'inputUpdate']);

Route::get('/admin/api/cutomer/list', [AdminController::class, 'cutomerList']);
