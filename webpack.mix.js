const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/install.js', 'public/js')
   .react('resources/js/tutorial.js', 'public/js')
   .react('resources/js/demo.js', 'public/js')
   .react('resources/js/conclusion.js', 'public/js')
   .react('resources/js/credits.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
