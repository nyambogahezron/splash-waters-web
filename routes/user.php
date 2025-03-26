<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/blogs', function () {
    return Inertia::render('blogs');
})->name('blogs');

Route::get('/cart', function () {
    return Inertia::render('cart');
})->name('cart');

Route::get('/products', function () {
    return Inertia::render('products');
})->name('products');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/orders', function () {
        return Inertia::render('orders');
    })->name('orders');

    Route::get('/checkout', function () {
        return Inertia::render('checkout');
    })->name('checkout');
});

