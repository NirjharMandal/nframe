<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/post', 'HomeController@postSample')->name('post');
Route::get('/{anypath}', 'HomeController@index')->where('anypath', '.*');
