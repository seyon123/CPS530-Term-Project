import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';

// Next Button (Home)
export class HomeNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        Get Started<ArrowForward />
        </Button>
    );
  }
}
// Installing Laravel
export class InstallLaravel extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        <ArrowBack />Install Laravel
        </Button>
    );
  }
}
// Installing Material UI
export class InstallUI extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install-ui">
        Install Material UI<ArrowForward />
        </Button>
    );
  }
}
// Previous Button (Install)
export class InstallPrev extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/">
        <ArrowBack />Previous
        </Button>
    );
  }
}
// Next Button (Install)
export class InstallNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/tutorial">
        Next<ArrowForward />
      </Button>
    );
  }
}
// Previous Button (Tutorial)
export class TutorialPrev extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        <ArrowBack />Previous
      </Button>
    );
  }
}
// Next Button (Tutorial)
export class TutorialNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/demo">
        Next<ArrowForward />
      </Button>
    );
  }
}
// Previous Button (Demo)
export class DemoPrev extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/tutorial">
        <ArrowBack />Previous
      </Button>
    );
  }
}
// Next Button (Demo)
export class DemoNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/conclusion">
        Next<ArrowForward />
      </Button>
    );
  }
}
// Previous Button (Conclusion)
export class ConclusionPrev extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/demo">
        <ArrowBack />Previous
      </Button>
    );
  }
}
// Next Button (Conclusion)
export class ConclusionNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/credits">
        Next<ArrowForward />
      </Button>
    );
  }
}
// Previous Button (Credits)
export class CreditsPrev extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/conclusion">
        <ArrowBack />Previous
      </Button>
    );
  }
}
// Next Button (Credits)
export class CreditsNext extends Component {
  render() {
    return (
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/">
        Home&nbsp;<HomeIcon />
      </Button>
    );
  }
}