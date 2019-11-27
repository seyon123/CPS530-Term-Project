import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';

import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: blue[50],
    },
  },
});

// Next Button (Home)
export class HomeNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        Get Started<ArrowForward />
        </Button>
      </MuiThemeProvider>
    );
  }
}
// Installing Laravel
export class InstallLaravel extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        <ArrowBack />Install Laravel
        </Button>
        </MuiThemeProvider>
    );
  }
}
// Installing Material UI
export class InstallUI extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install-ui">
        Install Material UI<ArrowForward />
        </Button>
        </MuiThemeProvider>
    );
  }
}
// Previous Button (Install)
export class InstallPrev extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/">
        <ArrowBack />Previous
        </Button>
        </MuiThemeProvider>
    );
  }
}
// Next Button (Install)
export class InstallNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/tutorial">
        Next<ArrowForward />
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Previous Button (Tutorial)
export class TutorialPrev extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/install">
        <ArrowBack />Previous
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Next Button (Tutorial)
export class TutorialNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/demo">
        Next<ArrowForward />
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Previous Button (Demo)
export class DemoPrev extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/tutorial">
        <ArrowBack />Previous
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Next Button (Demo)
export class DemoNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/conclusion">
        Next<ArrowForward />
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Previous Button (Conclusion)
export class ConclusionPrev extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/demo">
        <ArrowBack />Previous
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Next Button (Conclusion)
export class ConclusionNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/credits">
        Next<ArrowForward />
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Previous Button (Credits)
export class CreditsPrev extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/conclusion">
        <ArrowBack />Previous
      </Button>
      </MuiThemeProvider>
    );
  }
}
// Next Button (Credits)
export class CreditsNext extends Component {
  render() {
    return (
      <MuiThemeProvider theme={blueTheme}>
      <Button className="row justify-content-center" variant="outlined" color="primary" component="a" href="/">
        Home&nbsp;<HomeIcon />
      </Button>
      </MuiThemeProvider>
    );
  }
}