<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{env('APP_NAME')}}</title>

    <!-- Fonts -->

    <!-- Styles -->
</head>
<body class="antialiased">
<div id="app">
    <div>
        <app>
        </app>
    </div>
</div>
@vite('resources/js/Home/app.js')
</body>
</html>
