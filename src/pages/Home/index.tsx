import React from 'react';
import Slider, { Settings } from 'react-slick';

import Page from 'components/Page';
import VideoThumbnail from 'components/Video/VideoThumbnail';

import banner from 'static/img/the_matrix_banner.jpg';

import { range } from 'utils';

const Home: React.FunctionComponent = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
