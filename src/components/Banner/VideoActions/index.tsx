import React from 'react';

import { makeStyles } from '@material-ui/core';

import VideoLink from 'components/Video/VideoLink';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 4,
  },
}));

const VideoActions: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VideoLink>Play</VideoLink>
      <VideoLink>Wishlist</VideoLink>
      <VideoLink>Details</VideoLink>
    </div>
  );
};

export default VideoActions;
