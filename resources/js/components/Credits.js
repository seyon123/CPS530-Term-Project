import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Profile4 from './Profile4';
import {CreditsPrev} from './Buttons';
import {CreditsNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              {/* <div className="card-header">Credits and References</div>
              <br></br> */}
              <div className="card-body"><img src={logo} alt="Logo" height="200" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Profile1 />, document.getElementById('profile1'));
ReactDOM.render(<Profile2 />, document.getElementById('profile2'));
ReactDOM.render(<Profile3 />, document.getElementById('profile3'));
ReactDOM.render(<Profile4 />, document.getElementById('profile4'));
ReactDOM.render(<CreditsPrev />, document.getElementById('prevButton'));
ReactDOM.render(<CreditsNext />, document.getElementById('nextButton'));
