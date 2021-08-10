import React from 'react';

import { makeStyles } from '@material-ui/core';

import Page from 'components/Page';
import Slider, { SliderProps } from 'components/Slider';
import SliderArrow from 'components/Slider/SliderArrow';
import VideoThumbnail, { getImageSizes } from 'components/Video/VideoThumbnail';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

import banner from 'static/img/the_matrix_banner.jpg';
import bannerHalf from 'static/img/the_matrix_thumb.jpg';

import { range } from 'utils';

const useStyles = makeStyles((theme) => ({
  get slider() {
    return Object.fromEntries(
      Object.entries(getImageSizes(theme)).map((size) => {
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

const Home: React.FunctionComponent = () => {
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
    <Page>
      <Slider {...sliderProps}>
        {range(1, 5).map((item) => (
          <div key={item}>
            <VideoThumbnail ImgProps={{ src: thumbnail }} />
          </div>
        ))}
      </Slider>
    </Page>
  );
};

export default Home;
