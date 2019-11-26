# Laravel and Material-UI with Heroku
<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400">
<img src="https://miro.medium.com/max/480/1*7LOWVelUHYS1iqeX34Whzg.png" width="200">
</p>

## Table of Contents
[Part 1: Laravel](#part-1-laravel)

[Part 2: Use React with Laravel](#part-2-use-react-with-laravel)

[Part 3: Material-UI](#part-3-material-ui)

[Part 4: Setup Database](#part-4-setup-database)

## Prerequisites 
- [Git](https://git-scm.com/downloads)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- [Node.js](https://nodejs.org/en/download/)
- [PHP](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org/download/)  

# Part 1: Laravel

## Run Composer Installer
```
composer install
```

### If there is any errors related to Composer:
```
composer update
```

## Install Laravel
```
composer global require laravel/installer
```

## Create Laravel Project
Change into the directory where the project is to be created, where `PROJECT_NAME` is the name of your project.
```
laravel new PROJECT_NAME
cd PROJECT_NAME
```

## Add Procfile
Create a custom `Procfile` inside the project root folder with the following:
```
web: vendor/bin/heroku-php-apache2 public/
```

## Initialize Git Repo
```
git init
git add .
git commit -m "Installed Laravel"
```

## Login To Heroku
```
heroku login
```

## Create New Heroku App
```
heroku create
```

### If you already have an existing Heroku app, run these commands instead:
```
heroku list
heroku git:remote -a PROJECT_NAME -r heroku
```

## Setup Encryption Key
```
php artisan key:generate --show
heroku config:set APP_KEY={app_key_here}
```

## Add Config Vars To Heroku
To set config vars inside Heroku, click "Settings" and then "Reveal Config Vars". Add the following variables:
```
APP_NAME={app_name_here}
APP_ENV=production
APP_KEY={app_key_here}
APP_DEBUG=FALSE
APP_URL={url ending with herokuapp.com}
LOG_CHANNEL=errorlog
```

## GitHub Integration (optional)
Link an existing GitHub repo to your project, where `REMOTE_URL` is the remote repository URL ending with `.git`.
```
git remote add origin REMOTE_URL
git remote -v
```

## Commit Changes
```
git add .
git commit -m "Initial deployment"
```

## Push Changes
If using Heroku:
```
git push heroku master
```
If using GitHub (with Heroku auto-deploy enabled):
```
git push origin master
```  

# Part 2: Use React with Laravel

## React.js Scaffolding
```
php artisan preset react
npm install
```

## React View
- Create an `Index.js` file inside the `resources/js/components` directory.
- Copy all the content from the `Example.js` file to the `Index.js` and make some changes.

Inside the `app.js` file, add the new component on the last line:
```
require('./components/Index');
```

## Render Elements
Inside the `resources/views/welcome.blade.php` file, add the following lines in the `<body>`:
```html
<div class="content">
    <div id="example" class="title m-b-md">
    </div>
</div>
```
After the `</body>` tag, add the following line:
```html
<script type="text/javascript" src="js/app.js"></script>
``` 
## Local Dev Environment

Compile and watch for asset changes:
```
npm run watch
```

Start the local web server:
```
php artisan serve
```

## Build Production Code
```
npm run prod
```

### Don't forget to commit and push changes!  

# Part 3: Material-UI

## Install Material-UI
```
npm install @material-ui/core
```

## Roboto Font
Add the following line to the `<head>` of your files.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Responsive Meta Tag
```html
<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
```

## Font Icons
In order to use the font `Icon` component, you must first add the `Material icons` font.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## SVG Icons
In order to use prebuilt SVG Material icons, you must first install the @material-ui/icons package:
```
npm install @material-ui/icons
```

## Sample Code
`index.html:`
```html
<div id="app"></div>
```

`index.js:`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### Don't forget to commit and push changes!  

# Part 4: Setup Database

## Create Database
```
heroku addons:create heroku-postgresql:hobby-dev
```

## Configure Database
```
heroku config
```
- Copy the `DATABASE_URL` and open the `config/database.php` file.
- Change the default database to `pgsql` from `mysql`.

Define the following at the top of the file, where `YOUR_DATABASE_URL` is the url copied from above:
```php
$DATABASE_URL=parse_url('YOUR_DATABASE_URL');
```

The `pgsql` database config array should look like this:
```php
'pgsql' => [
            'driver' => 'pgsql',
            'host' => $DATABASE_URL["host"],
            'port' => $DATABASE_URL["port"],
            'database' => ltrim($DATABASE_URL["path"], "/"),
            'username' => $DATABASE_URL["user"],
            'password' => $DATABASE_URL["pass"],
            'charset' => 'utf8',
            'prefix' => '',
            'schema' => 'public',
            'sslmode' => 'require',
        ],
```

### Commit and push changes now!

## Run Migrations
```
heroku run php artisan migrate
```
Enter `yes` if it asks to run the migration on `production`.

## Authentication
```
composer require laravel/ui
php artisan ui react --auth
```

### Don't forget to commit and push changes!  

# References
- [Getting Started on Heroku with PHP](https://devcenter.heroku.com/articles/getting-started-with-php#set-up)

- [Getting Started with Laravel on Heroku](https://devcenter.heroku.com/articles/getting-started-with-laravel)

- [Installation - Laravel](https://laravel.com/docs/6.x/installation)

- [How to use React in a Laravel application](https://dev.to/lvtdeveloper/using-react-in-a-laravel-application-8fp)

- [Installation - Material-UI](https://material-ui.com/getting-started/installation/)

- [Authentication - Laravel](https://laravel.com/docs/6.x/authentication)
