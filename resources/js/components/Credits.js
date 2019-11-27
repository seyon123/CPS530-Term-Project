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
              <div><p style={{fontSize: '16px', margin: 'auto 20%'}}>Aliquam sed urna a leo molestie volutpat.
              Vestibulum egestas congue leo, ac aliquet tellus tincidunt non.
              Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula.
              Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit.</p></div>
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
