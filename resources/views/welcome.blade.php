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
        <link rel="stylesheet" type="text/css" href="css/center-radar.css"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <script type="text/javascript" src="js/pace.min.js"></script>
    </head>
    <body>
        <div id="navigation">
            <div id="menu"></div>
            <div id="navbar" class="flex-center position-ref links">
                <div class="link-container active"><a href="{{ url('/') }}">Home</a></div>
                <div class="link-container"><a href="{{ url('/install') }}">Install</a></div>
                <div class="link-container"><a href="{{ url('/tutorial') }}">Tutorial</a></div>
                <div class="link-container"><a href="{{ url('/demo') }}">Demo</a></div>
                <div class="link-container"><a href="{{ url('/conclusion') }}">Conclusion</a></div>
                <div class="link-container"><a href="{{ url('/credits') }}">Credits</a></div>
            </div>
        </div>
        <div class="position-ref full-height">
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
            <div class="content">
                <div id="title" class="title m-b-md"></div>
                <div class="text m-b-md"><h4>Created By:</h4></div>
                <div class="links">
                    <div class="link-container"><a href="https://github.com/lyjacky11" target="_blank">Jacky L</a></div>
                    <div class="link-container"><a href="https://github.com/Alliyah-M" target="_blank">Alliyah M</a></div>
                    <div class="link-container"><a href="https://github.com/JawwadK" target="_blank">Jawwad K</a></div>
                    <div class="link-container"><a href="https://github.com/seyon123" target="_blank">Seyon R</a></div>
                </div>
                <br>
                <div class="navBtn" id="nextButton" class="m-b-md"></div>
                <br><br>
                <table class="snapshot" id="frontEnd">
                    <tr>
                    <th colspan="2"><h2>Front-end Framework: Material UI</h2></th>
                    </tr>
                    <tr>  
                        <th>Popularity</th>
                        <td>Material-UI is the most popular React UI component library.</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Strengths</th>
                        <td>Scalable, you can build a wide range of products.</td>

                        <tr>
                            <td>A smooth, easy and appealing interface.</td>
                        </tr>
                        <tr>
                            <td>Well documented - makes it a beginner friendly front-end.</td>
                        </tr>
                    <tr>
                        <th rowspan="3">Weaknesses</th>
                        <td>Not great for heavy-data apps - Poor number of Data-originated Components</td>

                        <tr>
                            <td> It can be hard to discern interactive elements.</td>
                        </tr>
                        <tr>
                            <td>Not platform independent -Affiliation with Google ecosystem.</td>
                        </tr>
                    <tr>
                        <th>Examples and Use Cases</th>
                        <td>This frame work is currently used by Walmart, Bethesda, NASA and shutterstock. It is ideal for websites that provide an easy to use, clean and attractive user interface.</td>
                    </tr>
                </table>
                <table class="snapshot" id="backEnd">
                    <tr>
                        <th colspan="2"><h2>Back-end Framework: Laravel</h2></th>
                    </tr>
                    <tr>  
                        <th>Popularity</th>
                        <td>Introduced in 2011, Laravel has become the most popular free, open-source PHP framework.</td>
                    </tr>
                    <tr>
                        <th rowspan="3">Strengths</th>
                        <td>It can handle complex web applications securely, at a considerably faster pace than other frameworks.</td>
                    </tr>
                            <tr>
                                <td>Laravel is suitable when developing applications with complex backend requirements, whether small or large.</td>
                            </tr>
                            <tr>
                                <td>Artisan– Developing command line apps can be a breeze. It provides an outstanding Artisan CLI  that comprises of advanced tools which enable you to do tasks and migrations.</td>
                    <tr>
                        <th rowspan="3">Weaknesses</th>
                        <td>To modify core behavior there will be a lack of options.</td>

                            <tr>
                                <td>Speed and performance will be affected.</td>
                            </tr>
                            <tr>
                                <td>Community support is not widespread compared to other platforms.</td>
                            </tr>
                    <tr>
                        <th>Examples and Use Cases</th>
                        <td>Laravel is currently used to power startups.co, Fox47, and various other sites. This framework is ideal for developers who want to build B2B or enterprise websites that will evolve with changing web trends.</td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="js/app.js"></script>
</html>
