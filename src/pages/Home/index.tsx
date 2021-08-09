import React from 'react';

import Page from 'components/Page';
import VideoThumbnail from 'components/Video/VideoThumbnail';

import banner from 'static/img/the_matrix_banner.jpg';

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <VideoThumbnail ImgProps={{ src: banner }} />
    </Page>
  );
};

export default Home;
