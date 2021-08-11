import React from 'react';

import { makeStyles } from '@material-ui/core';

import BannerCategory from 'components/Banner/BannerCategory';
import BannerRating from 'components/Banner/BannerRating';
import Slider, { SliderProps } from 'components/Slider';
import SliderArrow from 'components/Slider/SliderArrow';
import Category from 'components/Video/Category';
import Rating from 'components/Video/Rating';
import VideoThumbnail from 'components/Video/VideoThumbnail';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

import banner from 'static/img/the_matrix_banner.jpg';
import bannerHalf from 'static/img/the_matrix_thumb.jpg';

import { range } from 'utils';

const useStyles = makeStyles((theme) => ({
  rootImage: {
    position: 'relative',
    marginRight: '4px',
    '&:focus': {
      outlineColor: theme.palette.text.primary,
    },
  },
  image: {
    [theme.breakpoints.down(400)]: {
      width: '300px',
      height: '169px',
    },
    [theme.breakpoints.up(400)]: {
      width: '350px',
      height: '197px',
    },
    [theme.breakpoints.up(700)]: {
      width: '650px',
      height: '366px',
    },
    [theme.breakpoints.up(1200)]: {
      width: '1150px',
      height: '647px',
    },
  },
  get slider() {
    return Object.fromEntries(
      Object.entries(this.image).map((size) => {
        return [
          size[0],
          {
            '& .slick-list, & .slick-track': {
              height: size[1].height,
            },
          },
        ];
      })
    );
  },
}));

const Banner: React.FunctionComponent = () => {
  const classes = useStyles();
  const classSlider = classes.slider;
  const isSmallWindow = useIsSmallWindow();

  const sliderProps: SliderProps = React.useMemo(
    () => ({
      className: classSlider,
      centerMode: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: !isSmallWindow,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [classSlider, isSmallWindow]
  );

  const thumbnail = isSmallWindow ? bannerHalf : banner;

  return (
    <>
      <Slider {...sliderProps}>
        {range(1, 5).map((item) => (
          <div key={item}>
            <VideoThumbnail
              classes={{ root: classes.rootImage, image: classes.image }}
              ImgProps={{ src: thumbnail }}
            >
              <BannerCategory>Movie</BannerCategory>
              <BannerRating rating="14" />
            </VideoThumbnail>
          </div>
        ))}
      </Slider>
      <Rating rating="L" />
      <Rating rating="10" />
      <Rating rating="14" />
      <Rating rating="16" />
      <Rating rating="18" />
      <Category>Movies</Category>
      <Category>Documentaries</Category>
    </>
  );
};

export default Banner;
