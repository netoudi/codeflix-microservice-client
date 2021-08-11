import React from 'react';

import { makeStyles } from '@material-ui/core';

import VideoActions from 'components/Banner/VideoActions';
import Category from 'components/Video/Category';
import VideoTitle from 'components/Video/VideoTitle';

import { Video } from 'utils/models';

export interface VideoContentProps {
  video: Video;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: 24,
    marginBottom: 40,
    bottom: 0,
  },
  title: {
    fontSize: '2em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5em',
    },
  },
  category: {
    fontSize: '1.4em',
    borderBottomWidth: '2px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6em',
      borderBottomWidth: '5px',
    },
  },
}));

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Category className={classes.category}>
        {video.categories.map((c) => c.name).join(' / ')}
      </Category>
      <VideoTitle className={classes.title}>{video.title}</VideoTitle>
      <VideoActions />
    </div>
  );
};

export default VideoContent;
