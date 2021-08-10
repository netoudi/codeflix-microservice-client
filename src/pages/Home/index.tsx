import React from 'react';

import Page from 'components/Page';
import Slider, { SliderProps } from 'components/Slider';
import SliderArrow from 'components/Slider/SliderArrow';
import VideoThumbnail from 'components/Video/VideoThumbnail';

import banner from 'static/img/the_matrix_banner.jpg';

import { range } from 'utils';

const Home: React.FunctionComponent = () => {
  const settings: SliderProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SliderArrow dir="left" />,
    nextArrow: <SliderArrow dir="right" />,
  };

  return (
    <Page>
      <Slider {...settings}>
        {range(1, 5).map((item) => (
          <div key={item}>
            <VideoThumbnail ImgProps={{ src: banner }} />
          </div>
        ))}
      </Slider>
    </Page>
  );
};

export default Home;
