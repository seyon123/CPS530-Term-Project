<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <title>{{ config('app.name', 'Laravel') }} | Installing Laravel</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>
    <body>
        <div id="navigation">
            <div id="menu"></div>
            <div id="navbar" class="flex-center position-ref links">
                <div class="link-container"><a href="{{ url('/') }}">Home</a></div>
                <div class="link-container active"><a href="{{ url('/install') }}">Install</a></div>
                <div class="link-container"><a href="{{ url('/tutorial') }}">Tutorial</a></div>
                <div class="link-container"><a href="{{ url('/demo') }}">Demo</a></div>
                <div class="link-container"><a href="{{ url('/conclusion') }}">Conclusion</a></div>
                <div class="link-container"><a href="{{ url('/credits') }}">Credits</a></div>
            </div>
        </div>
        <div class="position-ref full-height">
            <div class="content">
                <div id="title" class="title m-b-md"></div>
                <div class="navBtn" id="installButton" class="m-b-md"></div>
                <br><br>
                <?php
                include 'install-laravel.html';
                ?>
                <div class="navBtn" id="installButton2" class="m-b-md"></div>
                <br><br>
                <div class="navBtn" id="prevButton" class="m-b-md"></div>
                <div class="navBtn" id="nextButton" class="m-b-md"></div>
                <br><br>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="js/install-laravel.js"></script>
</html>
