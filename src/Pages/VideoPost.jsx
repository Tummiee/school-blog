import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from '../Data/Videos';
import '../Styles/VideoPost.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {Link} from 'react-router-dom';

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
      <video controls className='vp-video'>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="center-play2">
                    <PlayCircleIcon/>
      </div>
      <p style={{width: '80%'}}>{video.description}</p>

      <hr 
        style={{
                        backgroundColor: 'hsl(0, 0.00%, 68.60%)',
                        height: '1px',
                        width: '80%',
                        border: 'none',
                        
                    }}
      />
      <div className='bp-share-link' style={{width: '80%'}}>
        <div></div>
        <div className='bpLinks'>
            <div className='copyLink'><ContentCopyIcon /> Copy link</div>
            <div className='bpIcons'><XIcon/></div>
            <div className='bpIcons'><FacebookIcon/></div>
            <div className='bpIcons'><WhatsAppIcon/></div>
        </div>
      </div>
      
        <div className='mailingSubscriptionBox' style={{marginTop: '10%'}}>
                    <div className='mailingImg'></div>
                    <div className='mailingTexts'>
                        <h1 style={{fontSize: 'clamp(2rem, 3.6vw, 5rem)'
                        }}>Join Mailing List</h1>
                        <p style={{fontSize: 'clamp(1rem, 1.3vw, 1.8rem)',
                                    color: 'hsl(0, 0.00%, 54.10%)',
                                    paddingTop: '8%'
                        }}>Sign up and get all the latest, and videos</p>
                        <div className='mailingInput'>
                            <input placeholder='Email Address' className='emailAddress'></input>
                            <div className='subscribe'>SUBSCRIBE</div>
                        </div>
                    </div>
        </div>
    </div>
  );
};

export default VideoPost;
