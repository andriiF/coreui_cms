<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/login', function () {
    return view('welcome');
})->name('login');

Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'store'])->name('login.store');



