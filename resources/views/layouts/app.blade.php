<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper" id="app">
        @include('layouts.admin-include.navbar')
        @include('layouts.admin-include.sidebar')
        <div class="content-wrapper">
            @yield('content')
        </div>
        @include('layouts.admin-include.aside')
        @include('layouts.admin-include.footer')
    </div>
<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
