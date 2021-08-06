import React from 'react';

import { AppBar, BottomNavigation, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

import FooterItem from 'components/Footer/FooterItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    top: 'auto',
    borderTop: `1px solid ${theme.palette.text.secondary}`,
  },
  bottomNavigation: {
    backgroundColor: 'inherit',
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          root: classes.appBar,
        }}
        position="fixed"
        color="primary"
      >
        <BottomNavigation className={classes.bottomNavigation} showLabels>
          <FooterItem label="Home" value="home" icon={<HomeIcon />} />
          <FooterItem
            label="Categories"
            value="categories"
            icon={<ListIcon />}
          />
          <FooterItem
            label="Notifications"
            value="notifications"
            icon={<NotificationsIcon />}
          />
          <FooterItem label="Profile" value="profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
};

export default Footer;