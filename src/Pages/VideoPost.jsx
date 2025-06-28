import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from '../Data/Videos';

const VideoPost = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const foundVideo = Videos.find((item) => item.id === parseInt(id));
    setVideo(foundVideo);
  }, [id]);

  if (!video) return <div>Video not found</div>;

  return (
    <div className="video-post">
      <h1>{video.name}</h1>
      <video controls>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPost;
