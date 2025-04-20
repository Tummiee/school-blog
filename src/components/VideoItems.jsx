import React, { useRef, useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function VideoItems({ description, name, video}) {

    const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

    const videoRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const openPlayer = () => {
      setIsExpanded(true);
      setTimeout(() => {
        videoRef.current?.play();
      }, 200);
    };
  
    const closePlayer = () => {
      setIsExpanded(false);
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
    };

  return (
    <div className='videoCard'>
       <div style={{ width: '25%', height: '15vh' }} className='bCImage2' onClick={openPlayer}>
          <video src={video} muted playsInline preload="metadata" />
          <div className="center-play">
            <PlayCircleIcon/>
          </div> 
       </div>
       {/* Fullscreen overlay */}
      {isExpanded && (
        <div className="video-overlay">
          <div className="overlay-bg" onClick={closePlayer}></div>
          <div className="video-wrapper">
            <video ref={videoRef} src={video} controls autoPlay />
            <button className="close-btn" onClick={closePlayer}>✖</button>
          </div>
        </div>
      )}
       <div className='videoCardTexts'>
            <h2 style={{fontSize: 'clamp(1rem, 1.5vw, 2.5rem)'}}>{name}</h2>
            <p style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.6rem)',
                color: 'hsl(0, 0.00%, 54.10%)'
            }}>{extractedSentence}</p>
        </div> 
    </div>
  )
}

export default VideoItems