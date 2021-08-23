import React from 'react';

import { makeStyles, Theme, Typography } from '@material-ui/core';

import { Video } from 'utils/models';

const useSectionTitleStyles = makeStyles((theme: Theme) => ({
  root: {
    fontsize: '1.4em',
    fontWeight: 600,
    textTransform: 'uppercase',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    margin: theme.spacing(3, 3),
  },
}));

export const SectionTitle: React.FunctionComponent = (props) => {
  const classes = useSectionTitleStyles();

  return (
    <Typography className={classes.root} component="h2" color="textSecondary">
      {props.children}
    </Typography>
  );
};

export interface SectionSliderProps {
  title: string;
  videos: Video[];
}

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
  const { title, videos } = props;

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {videos.map((video) => (
        <p>{video.title}</p>
      ))}
    </section>
  );
};

export default SectionSlider;
