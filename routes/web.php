<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/install', function () {
    return view('install');
});

Route::get('/install-2', function () {
    return view('install-2');
});

Route::get('/tutorial', function () {
    return view('tutorial');
});

Route::get('/demo', function () {
    return view('demo');
});

Route::get('/conclusion', function () {
    return view('conclusion');
});

Route::get('/credits', function () {
    return view('credits');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
