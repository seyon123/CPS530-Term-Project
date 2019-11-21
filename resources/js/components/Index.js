import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.png';


// function CreateButton() {
//     return (
//       <Button variant="contained" color="primary">
//         I am a Material UI Button!
//       </Button>
//     );
//   }


export default class Title extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Material UI and Laravel Framework</div>
                            <br></br>
                            <div className="card-body"><img src={logo} alt="Logo" height="200"/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/*
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString("en-US")
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        500
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString("en-US")
      });
    }
    render() {
      return (
        <h3 className="App-clock">
          Current Time: {this.state.time}
        </h3>
      );
    }
  }
*/
ReactDOM.render(<Title/>, document.getElementById('title'));
