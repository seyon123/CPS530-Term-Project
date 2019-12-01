### We will be creating a simple 'Hello World' page with a Material UI button and an image!

- Place an image file called `logo.png` inside the `resources/js/components` directory.
- Create a new file in the directory above called `HelloWorld.js` with something like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.png';

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Hello World!</div>
              <br></br>
              <img src={logo} alt="Logo"/>
              <Button variant="contained" color="primary">
                This is a Material UI button!
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById('helloWorld'));
```

Then, inside the `resources/js` directory, include the React component you just created at the end of the `app.js` file.

```javascript
require('./components/HelloWorld');
```

In the `resources/views` directory, edit the `welcome.blade.php` file and create a new `<div>` inside the `content` class that looks similar to this:

```html
<div class="position-ref full-height">
            <div class="content">
                <div id="helloWorld" class="title m-b-md">
                    <!-- React Component will show up here -->
                </div>
                <br><br>
            </div>
        </div>
```

Next, add the following line after the `</body>` tag:
```html
<script type="text/javascript" src="js/app.js"></script>
```

To use Roboto font, add the following to the `<head>` of your files:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

For responsive design, add the following to the `<head>` of your files:
```html
<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
```

Lastly, edit the `routes/web.php` file and add the following:
```php
Route::get('/', function () {
    return view('welcome');
});
```

### Congratulations! You have now made a simple page using Material UI and Laravel!

## For more documentation, check out these pages!

- [Material-UI Documentation](https://material-ui.com/)

- [Laravel Documentation](https://laravel.com/docs/6.x)