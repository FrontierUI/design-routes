import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

import vid from '/images/860x500.mp4';

const Video = () => {
  return (
    <Player autoPlay src={vid} className="flexy rounded-xl w-full h-full pt-10">
      <ControlBar autoHide={false} className="flexy" />
    </Player>
  );
};

export default Video;
