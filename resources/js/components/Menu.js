import React from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import GetAppIcon from '@material-ui/icons/GetApp';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function CreateDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <List>
        <ListItem button component="a" href="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/install">
          <ListItemIcon><GetAppIcon /></ListItemIcon>
          <ListItemText primary="Install" />
        </ListItem>
        <ListItem button component="a" href="/tutorial">
          <ListItemIcon><FindInPageIcon /></ListItemIcon>
          <ListItemText primary="Tutorial" />
        </ListItem>
        <ListItem button component="a" href="/demo">
          <ListItemIcon><WebAssetIcon /></ListItemIcon>
          <ListItemText primary="Demo" />
        </ListItem>
        <ListItem button component="a" href="/conclusion">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Conclusion" />
        </ListItem>
        <ListItem button component="a" href="/credits">
          <ListItemIcon><LinkIcon /></ListItemIcon>
          <ListItemText primary="Credits" />
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem>
            <ListItemText primary="CPS 530 - Fall 2019" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
ReactDOM.render(<CreateDrawer/>, document.getElementById('menu'));