import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DemoPrev} from './Buttons';
import {DemoNext} from './Buttons';
import Soundboard from './Soundboard';
import soundboard from './soundboard.png'

export default class Demo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Animal Soundboard</div>
              <br></br>
              <div className="card-body"><img src={soundboard} height="200" alt="Soundboard" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('demo'));
ReactDOM.render(<Soundboard />, document.getElementById('soundboard'));
ReactDOM.render(<DemoPrev />, document.getElementById('prevButton'));
ReactDOM.render(<DemoNext />, document.getElementById('nextButton'));