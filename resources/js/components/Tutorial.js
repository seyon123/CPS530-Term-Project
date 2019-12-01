import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tutorial from './tutorial.png';
import {TutorialPrev} from './Buttons';
import {TutorialNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Quick Start Guide - Material UI / Laravel</div>
              <br></br>
              <div className="card-body"><img src={tutorial} alt="Tutorial" /></div>
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