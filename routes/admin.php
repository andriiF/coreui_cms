<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['web', 'auth'])->group(function () {
    Route::prefix('superadmin')->group(function () {
        Route::get('/', [\App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin-home');
        Route::post('/Profile/{id}', [\App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');


    });
    Route::get('/getUser', [\App\Http\Controllers\Admin\AdminController::class, 'getUser'])->name('admin.getUser');
});

