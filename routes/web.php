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

Route::get('/', [Calendar::class, 'tutul']);
Route::get('/calendar', [Calendar::class, 'index']);
Route::get('/company', [HomeController::class, 'company']);
Route::get('/reservation', [Bookingmanagement::class, 'list']);
Route::get('/company-leave', [Company::class, 'leave']);
Route::get('/company-employee', [Company::class, 'list']);
Route::get('/company-edit', [Company::class, 'editform']);
Route::get('/company-employee', [Company::class, 'list']);
Route::get('/acceptapp/{companyID}/{userid}', [Company::class, 'acceptApplication']);
Route::get('/delapp/{companyID}/{userid}', [Company::class, 'deleteApplication']);
Route::get('/delempl/{companyID}/{userid}', [Company::class, 'kickemployee']);
Route::get('/delbook/{idbook}', [Bookingmanagement::class, 'deleteBooking']);
Route::post('/addEvent', [Bookingmanagement::class, 'reservation']);
Route::post('/company-edit', [Company::class, 'edit']);
Route::post('/company-request', [Company::class, 'request']);
Route::post('/company-create', [Company::class, 'CreateCompany']);
Route::get('/logout', [HomeController::class, 'logout']);
Auth::routes();
//Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/home', function () {
    // Validate the request...
 
    return redirect('/');
});
