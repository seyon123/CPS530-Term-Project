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
              <div className="card-body">Performance</div>
              <br></br>
              <div className="card-body">
              <p style={{ fontSize: '16px', margin: 'auto 20%' }}>
                Overall, Material UI and Laravel performed well over our expectations.
                There were numerous React Components available, all so widely customizable that we couldn't display them all at once.
                Although the initial setup of the backend was difficult, it became easy to use and implement over time.
                
              </p>
              </div>
              <br></br>
              <div className="card-body">Install & Configuration</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>
                The installation of Laravel was difficult due to the prerequisites and many configurations that we had to account for.
                However, it was easy to make changes once the server was configured correctly.
                Material UI and React were easy to install thanks to the step-by-step instructions listed in the documentation.
              </p>
              </div>
              <br></br>
              <div className="card-body">Creating Pages</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>
                Laravel makes it easy to create new pages once the user is familiar with the 
                folder structure of the backend.
                However, pages can get dereferenced and other errors can occur if the format 
                for structuring pages isn't followed.
              </p>
              </div>
              <br></br>
              <div className="card-body">Learning Curve</div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>In comparison to 
              regular HTML/CSS/JS/PHP,
              Laravel's learning curve wasn't steep per say, however setting up a backend framework without prior 
              experience was a bit challenging.
              </p>
              </div>
              <br></br>
              <div className="card-body">Retrospects and Regrets </div>
              <br></br>
              <div className="card-body"><p style={{ fontSize: '16px', margin: 'auto 20%' }}>
              In retrospect, we would've invested more time into learning and understanding how 
                each of the frameworks work and their interactions with each other.

                We don't regret using our frameworks, however, if given the choice we would've instead chosen frameworks 
                which complement each other's libraries and features.



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