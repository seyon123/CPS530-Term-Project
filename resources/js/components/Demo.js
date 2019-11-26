import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DemoPrev} from './Buttons';
import {DemoNext} from './Buttons';
import Soundboard from './Soundboard';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Animal Soundboard</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Soundboard />, document.getElementById('soundboard'));
ReactDOM.render(<DemoPrev />, document.getElementById('prevButton'));
ReactDOM.render(<DemoNext />, document.getElementById('nextButton'));