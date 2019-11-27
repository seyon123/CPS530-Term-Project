import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Profile4 from './Profile4';
import {CreditsPrev} from './Buttons';
import {CreditsNext} from './Buttons';

export default class Credits extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Credits</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class References extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">References</div>
              <br></br>
              <div className="card-body" style={{fontSize: '18px'}}>
                  <a href='https://devcenter.heroku.com/articles/getting-started-with-php#set-up' style={{textDecoration: 'none'}} target='_blank'>Getting Started on Heroku with PHP</a>
                  <br></br><br></br>
                  <a href='https://devcenter.heroku.com/articles/getting-started-with-laravel' style={{textDecoration: 'none'}} target='_blank'>Getting Started with Laravel on Heroku</a>
                  <br></br><br></br>
                  <a href='https://laravel.com/docs/6.x/installation' style={{textDecoration: 'none'}} target='_blank'>Installation - Laravel</a>
                  <br></br><br></br>
                  <a href='https://dev.to/lvtdeveloper/using-react-in-a-laravel-application-8fp' style={{textDecoration: 'none'}} target='_blank'>How to use React in a Laravel application</a>
                  <br></br><br></br>
                  <a href='https://material-ui.com/getting-started/installation/' style={{textDecoration: 'none'}} target='_blank'>Installation - Material-UI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Credits />, document.getElementById('credits'));
ReactDOM.render(<Profile1 />, document.getElementById('profile1'));
ReactDOM.render(<Profile2 />, document.getElementById('profile2'));
ReactDOM.render(<Profile3 />, document.getElementById('profile3'));
ReactDOM.render(<Profile4 />, document.getElementById('profile4'));
ReactDOM.render(<References />, document.getElementById('references'));
ReactDOM.render(<CreditsPrev />, document.getElementById('prevButton'));
ReactDOM.render(<CreditsNext />, document.getElementById('nextButton'));
