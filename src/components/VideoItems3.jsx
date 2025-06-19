import React, { useRef, useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


function VideoItems3({video, description, name}) {

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
        <div className="video-container2">
            <div className='vCont2' onClick={openPlayer}>
                <video src={video} muted playsInline preload="metadata" />
                <div className="center-play2">
                    <PlayCircleIcon/>
                </div>
            </div>
            <h2 className='h2h' style={{fontSize: 'clamp(1.2rem, 1.8vw, 2.4rem)'}}>{name}</h2>
            <p className='p2h' style={{color: 'hsl(0, 0.00%, 54.10%)',
                        fontSize: 'clamp(1rem, 1.3vw, 2rem)'
            }}>{extractedSentence}</p>
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
        </div>
  )
}

export default VideoItems3