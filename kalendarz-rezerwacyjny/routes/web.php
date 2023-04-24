<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Calendar;
use App\Http\Controllers\Bookingmanagement;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/cale', [Calendar::class, 'index']);
Route::post('/addEvent', [Bookingmanagement::class, 'Reservation']);
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
