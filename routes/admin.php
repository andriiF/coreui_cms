<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['web','auth'])->group(function () {
    Route::get('/superadmin/',[\App\Http\Controllers\Admin\AdminController::class,'index'])->name('admin-home');
});

