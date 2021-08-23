import React from 'react';
import { Settings } from 'react-slick';

import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import Slider from 'components/Slider';
import SliderArrow from 'components/Slider/SliderArrow';
import VideoThumbnail from 'components/Video/VideoThumbnail';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

import banner from 'static/img/the_matrix_banner.jpg';
import bannerThumbnail from 'static/img/the_matrix_poster.jpg';

import { range } from 'utils';
import { Video } from 'utils/models';

const useSectionTitleStyles = makeStyles((theme: Theme) => ({
  root: {
    fontsize: '1.4em',
    fontWeight: 600,
    textTransform: 'uppercase',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    margin: theme.spacing(3, 3),
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(2, 1),
    },
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

const useSectionSliderStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(0, 1),
    },
  },
  videoThumbnailRoot: {
    marginRight: '4px',
    '&:focus': {
      outlineColor: theme.palette.text.primary,
    },
  },
}));

export interface SectionSliderProps {
  title: string;
  videos: Video[];
}

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
  const { title } = props;
  const classes = useSectionSliderStyles();
  const isSmallWindow = useIsSmallWindow();

  const sliderProps: Settings = React.useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      variableWidth: true,
      arrows: !isSmallWindow,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [isSmallWindow]
  );

  const theme = useTheme();
  const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));

  const thumbnail = isDown1200 ? bannerThumbnail : banner;

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes.root}>
        <Slider settings={sliderProps}>
          {range(1, 5).map((item, index) => (
            <div key={item}>
              <VideoThumbnail
                classes={{ root: classes.videoThumbnailRoot }}
                ImgProps={{ src: thumbnail }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionSlider;
