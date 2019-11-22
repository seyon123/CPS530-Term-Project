import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

// ReactDOM.render(<Clock/>, document.getElementById('clock'));