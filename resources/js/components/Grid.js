import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0 3%',
    textAlign: 'left',
    color: '#505050',
    boxShadow: 'none',
    //color: theme.palette.text.secondary,
  },
  title: {
    padding: theme.spacing(2),
    margin: '0 3%',
    textAlign: 'center',
    color: '#505050',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontWeight: '400',
    fontSize: '26px',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* <Grid item xs={6}>
          <Paper className={classes.title}>MATERIAL UI</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.title}>LARAVEL</Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.title}>Popularity</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Material-UI is the most popular React UI component library.</li>
            </ul>
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Introduced in 2011, Laravel has become the most popular free, open-source PHP framework.</li>
            </ul>
            </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper className={classes.title}>Strengths</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Scalable, you can build a wide range of products.</li>
              <li>A smooth, easy and appealing interface.</li>
              <li>Well documented - makes it a beginner friendly front-end.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Can handle complex web applications securely, at a considerably faster pace than other frameworks.</li>
              <li>Suitable when developing applications with complex backend requirements, whether small or large.</li>
              {/* <li>Artisan – Developing command line apps can be a breeze.</li> */}
              <li>Provides an outstanding Artisan CLI that comprises of advanced tools which enable you to do tasks and migrations.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.title}>Weaknesses</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Not great for heavy-data apps - Poor number of Data-originated Components</li>
              <li>It can be hard to discern interactive elements.</li>
              <li>Not platform independent -Affiliation with Google ecosystem.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>To modify core behavior there will be a lack of options.</li>
              <li>Speed and performance will be affected.</li>
              <li>Community support is not widespread compared to other platforms.</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.title}>Examples and Use Cases</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Currently used by Walmart, Bethesda, NASA and shutterstock.</li>
              <li>Ideal for websites that provide an easy to use, clean and attractive user interface.</li>
            </ul>
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ul>
              <li>Currently used to power startups.co, Fox47, and various other sites.</li>
              <li>Ideal for developers who want to build B2B or enterprise websites that will evolve with changing web trends.</li>
            </ul>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
