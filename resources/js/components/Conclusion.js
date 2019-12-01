import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import { ConclusionPrev } from './Buttons';
import { ConclusionNext } from './Buttons';

export default class Conclusion extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header" style={{fontSize: '3rem'}}>Conclusion</div>
              <br></br>
              <div className="card-body">Framework Expectations</div>
              <br></br>
              <div className="card-body">
              <p style={{ fontSize: '16px', margin: 'auto 20%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In nec leo sit amet sem faucibus pulvinar. In nibh mi, viverra eget nisi nec, tempor varius magna.
              Quisque ipsum ligula, ullamcorper at urna ac, sollicitudin efficitur lacus. Aenean varius mollis sapien, ac ultrices ex dapibus viverra.
              </p>
              </div>
              <br></br>
              <div className="card-body">Install & Configuration</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>Aliquam sed urna a leo molestie volutpat.
              Vestibulum egestas congue leo, ac aliquet tellus tincidunt non.
              Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula.
              Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              </div>
              <br></br>
              <div className="card-body">Creating Pages</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>Aliquam sed urna a leo molestie volutpat.
              Vestibulum egestas congue leo, ac aliquet tellus tincidunt non.
              Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula.
              Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              </div>
              <br></br>
              <div className="card-body">Learning Curve</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>Aliquam sed urna a leo molestie volutpat.
              Vestibulum egestas congue leo, ac aliquet tellus tincidunt non.
              Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula.
              Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              </div>
              <br></br>
              <div className="card-body">Regrets of Frameworks</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>Aliquam sed urna a leo molestie volutpat.
              Vestibulum egestas congue leo, ac aliquet tellus tincidunt non.
              Etiam pretium, lacus non tempus condimentum, dolor ipsum convallis tortor, quis fermentum tellus ante in ligula.
              Curabitur feugiat lectus vitae ipsum aliquam, ac ultricies ipsum suscipit.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Conclusion />, document.getElementById('conclusion'));
ReactDOM.render(<ConclusionPrev />, document.getElementById('prevButton'));
ReactDOM.render(<ConclusionNext />, document.getElementById('nextButton'));