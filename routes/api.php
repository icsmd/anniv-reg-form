<?php

use App\Http\Controllers\Api\UserAccountApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegistrationApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    // NOTE: Provide header token authentication middleware (External)
    Route::get('registration/get-all', [RegistrationApiController::class, 'getAllRegistration']);
    // NOTE: Provide header token authentication middleware (Internal)
    Route::post('registration/create', [RegistrationApiController::class, 'createRegistration']);

    Route::post('admin/user/create', [UserAccountApiController::class, 'createUserAccount']);
});

