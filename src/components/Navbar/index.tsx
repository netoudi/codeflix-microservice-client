import React from 'react';

import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

import Logo from 'components/Logo';
import Notifications from 'components/Notifications';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Logo />
          <Notifications />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
