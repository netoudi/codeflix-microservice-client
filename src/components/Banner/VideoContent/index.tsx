import React from 'react';

import BannerCategory from 'components/Banner/BannerCategory';
import VideoActions from 'components/Banner/VideoActions';
import VideoTitle from 'components/Video/VideoTitle';

import { Video } from 'utils/models';

export interface VideoContentProps {
  video: Video;
}

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;

  return (
    <div>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(' / ')}
      </BannerCategory>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoActions />
    </div>
  );
};

export default VideoContent;
