import React from 'react';

import { AppBar, Grid, makeStyles, Toolbar } from '@material-ui/core';

import InputSearch from 'components/InputSearch';
import Logo from 'components/Logo';
import MenuAccount from 'components/Menus/MenuAccount';
import MenuCategories from 'components/Menus/MenuCategories';
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
          <MenuCategories />
          <Logo />
          <Grid container justify="center">
            <Grid item xs={8} lg={7}>
              <InputSearch />
            </Grid>
          </Grid>
          <Notifications />
          <MenuAccount />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
