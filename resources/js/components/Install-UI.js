import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import react from './logo.png';
import {InstallLaravel} from './Buttons';
import {InstallPrev} from './Buttons';
import {InstallNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Installing Material UI</div>
              <br></br>
              <div className="card-body"><img src={react} alt="React" width="250" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<InstallLaravel />, document.getElementById('installButton'));
ReactDOM.render(<InstallLaravel />, document.getElementById('installButton2'));
ReactDOM.render(<InstallPrev />, document.getElementById('prevButton'));
ReactDOM.render(<InstallNext />, document.getElementById('nextButton'));