<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <title>{{ config('app.name', 'Laravel')}} | Credits</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="top-right links">
                <div class="link-container"><a href="{{ url('/') }}">Home</a></div>
                <div class="link-container"><a href="{{ url('/install') }}">Install</a></div>
                <div class="link-container"><a href="{{ url('/tutorial') }}">Tutorial</a></div>
                <div class="link-container"><a href="{{ url('/demo') }}">Demo</a></div>
                <div class="link-container"><a href="{{ url('/conclusion') }}">Conclusion</a></div>
                <div class="link-container active"><a href="{{ url('/credits') }}">Credits</a></div>
            </div>
            <div class="content">
                <div class="title m-b-md">Credits</div>
                <div class="text m-b-md">
                In nibh mi, viverra eget nisi nec, tempor varius magna. Quisque ipsum ligula, ullamcorper at urna ac, sollicitudin efficitur lacus. In ornare lobortis ipsum, id hendrerit ligula. Fusce sodales nisl ac dolor fringilla, eu malesuada lacus vehicula. Quisque hendrerit eros turpis, et blandit dui luctus quis. Suspendisse imperdiet dapibus fermentum. Nam feugiat sem ut risus pretium, eget finibus mi molestie. Nam finibus dui at facilisis finibus. Suspendisse ac condimentum orci, sed sodales dolor. Sed ultrices est eget sapien tincidunt, ultricies auctor dui porta. Quisque malesuada turpis a dui porttitor, nec vehicula augue mollis. Vestibulum sodales velit ut facilisis aliquam. Phasellus tellus felis, rhoncus vel sagittis non, maximus vel elit. Aenean consectetur congue lorem id lacinia. Curabitur tempus dictum purus sed mollis. Ut placerat nulla odio, eu rhoncus ante vehicula quis.
                </div>
                <div class="title m-b-md">References</div>
                <div class="text m-b-md">
                Aliquam sed urna a leo molestie volutpat. Vestibulum egestas congue leo, ac aliquet tellus tincidunt non. Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula. Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc accumsan, sapien ac maximus sodales, nisl magna facilisis turpis, eget tristique est dolor maximus risus. Ut quis sodales dolor, a aliquet erat. Etiam et rhoncus sapien, dictum mollis massa. Duis hendrerit ante ex.
                </div>
            </div>
        </div>
    </body>
</html>
