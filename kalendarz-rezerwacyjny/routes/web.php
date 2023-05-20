<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Calendar;
use App\Http\Controllers\Bookingmanagement;
use App\Http\Controllers\HomeController;
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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [Calendar::class, 'index']);
Route::get('/company', [HomeController::class, 'company']);
Route::post('/addEvent', [Bookingmanagement::class, 'Reservation']);
Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
