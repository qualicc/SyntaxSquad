<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Calendar;
use App\Http\Controllers\Company;
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
//     return view('welcome');company-leave
// });
Route::get('/', [Calendar::class, 'index']);
Route::get('/company', [HomeController::class, 'company']);
Route::post('/addEvent', [Bookingmanagement::class, 'Reservation']);
Route::get('/reservation', [Bookingmanagement::class, 'list']);
Route::get('/company-leave', [Company::class, 'leave']);
Route::get('/company-edit', [Company::class, 'editform']);
Route::post('/company-edit', [Company::class, 'edit']);
Route::post('/company-request', [Company::class, 'request']);
Route::post('/company-create', [Company::class, 'CreateCompany']);
Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
