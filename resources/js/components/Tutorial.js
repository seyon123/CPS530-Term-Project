import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import {TutorialPrev} from './Buttons';
import {TutorialNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Short Tutorial</div>
              <br></br>
              <div className="card-body"><img src={logo} alt="Logo" height="200" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<TutorialPrev />, document.getElementById('prevButton'));
ReactDOM.render(<TutorialNext />, document.getElementById('nextButton'));