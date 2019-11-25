import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import laravel from './laravel.png';
import {InstallUI} from './Buttons';
import {InstallPrev} from './Buttons';
import {InstallNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Installing Laravel</div>
              <div className="card-body"><img src={laravel} alt="Laravel" width="250" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<InstallUI />, document.getElementById('installButton'));
ReactDOM.render(<InstallUI />, document.getElementById('installButton2'));
ReactDOM.render(<InstallPrev />, document.getElementById('prevButton'));
ReactDOM.render(<InstallNext />, document.getElementById('nextButton'));