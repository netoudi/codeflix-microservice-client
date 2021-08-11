import React from 'react';

import { makeStyles } from '@material-ui/core';

import VideoLink from 'components/Video/VideoLink';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
