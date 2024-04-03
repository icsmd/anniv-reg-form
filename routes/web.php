<?php

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\front\AuthFrontController;
use App\Http\Controllers\front\RegistrationFrontController;

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
   return redirect('/public/registration');
});

Route::get('public/{any?}', function () {
    return view('main');
})->where('any', '.*');

Route::get('get-mst', [RegistrationFrontController::class, 'getMembershipTypes']);

Route::post('auth/log-in', [AuthFrontController::class, 'login']);
Route::post('auth/log-out', [AuthFrontController::class, 'logout']);

// Route::middleware(['session.check'])->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('session', [AuthFrontController::class, 'getUserSession']);
    });
// });


