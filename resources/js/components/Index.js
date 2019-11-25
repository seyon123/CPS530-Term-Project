import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import react from './logo.png';
import laravel from './laravel.png';
import {HomeNext} from './Buttons';

export default class Title extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Material UI and Laravel Framework</div>
              <br></br>
              <div className="card-body"><p style={{textAlign: "center"}}><img src={react} alt="React" width="250" style={{marginRight: "5%"}}/>
              <img src={laravel} alt="Laravel" width="250" style={{marginLeft: "5%"}}/></p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<HomeNext />, document.getElementById('nextButton'));