<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <title>{{ config('app.name', 'Laravel') }} | Home</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <!-- @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif -->
            <div class="top-right links">
                <div class="link-container active"><a href="{{ url('/') }}">Home</a></div>
                <div class="link-container"><a href="{{ url('/install') }}">Install</a></div>
                <div class="link-container"><a href="{{ url('/tutorial') }}">Tutorial</a></div>
                <div class="link-container"><a href="{{ url('/demo') }}">Demo</a></div>
                <div class="link-container"><a href="{{ url('/conclusion') }}">Conclusion</a></div>
                <div class="link-container"><a href="{{ url('/credits') }}">Credits</a></div>
            </div>
            
            <div class="content">
                <div id="title" class="title m-b-md"></div><br>
                <div id="clock" class="m-b-md"></div><br>
                <div id="button" class="m-b-md"></div><br>
                <div class="text m-b-md"><h4>Created By:</h4></div>
                <div class="links">
                    <div class="link-container"><a href="https://github.com/lyjacky11">Jacky L</a></div>
                    <div class="link-container"><a href="https://github.com/Alliyah-M">Alliyah M</a></div>
                    <div class="link-container"><a href="https://github.com/JawwadK">Seyon R</a></div>
                    <div class="link-container"><a href="https://github.com/seyon123">Jawwad K</a></div>
                </div><br>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="js/app.js"></script>
</html>
