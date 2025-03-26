<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\EnsureIsAdmin;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');



Route::middleware(['auth', 'verified', EnsureIsAdmin::class])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/user.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';