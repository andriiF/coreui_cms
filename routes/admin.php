<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/superadmin/', [\App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin-home');
    Route::get('/getUser', [\App\Http\Controllers\Admin\AdminController::class, 'getUser'])->name('admin.getUser');
});

