import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 300,
    textTransform: 'uppercase',
  },
}));

const VideoTitle: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Typography component="h3" className={classes.root}>
      {props.children}
    </Typography>
  );
};

export default VideoTitle;
