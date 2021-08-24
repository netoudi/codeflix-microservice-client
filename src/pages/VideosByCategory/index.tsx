import React from 'react';

import Page from 'components/Page';
import VideoList from 'components/Video/VideoList';

const VideosByCategory: React.FunctionComponent = () => {
  return (
    <Page>
      <VideoList videos={[]} />
    </Page>
  );
};

export default VideosByCategory;
