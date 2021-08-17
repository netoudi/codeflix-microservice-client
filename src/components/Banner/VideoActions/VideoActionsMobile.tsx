import React from 'react';

import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'inherit',
  },
  navigationAction: {
    color: theme.palette.text.primary,
  },
}));

const VideoActionsMobile: React.FunctionComponent = () => {
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();

  return isSmallWindow ? (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Play"
        icon={<PlayCircleOutlineIcon />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="My List"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Info"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  ) : null;
};

export default VideoActionsMobile;
