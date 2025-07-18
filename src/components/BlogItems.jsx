import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';


function BlogItems({ image, name, description }) {
  // Extract the second sentence safely
  const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
    <div className='blogCard'>
      <div style={{ backgroundImage: `url(${image})` }} className='bCImage' ></div>
      <h2 style={{fontSize: 'clamp(1.4rem, 2.4vw, 3.1rem)'}} className='h2h'>{name}</h2>
      <pr className='prh' style={{
        fontSize: 'clamp(1rem, 1.2vw, 2rem)',
        color: 'hsl(0, 0.00%, 54.10%)'
      }}>{extractedSentence}</pr>
      <Link   className='blogLink' style={{textDecoration: 'none', color: 'inherit', display: 'inline-block'}} >
        <div className='readMore' style={{
          fontSize: 'clamp(.9rem, 1.1vw, 2rem)',
          color: 'hsl(27, 77%, 65%)'
        }}>READ MORE <EastIcon style={{fontSize: 'clamp(.8rem, 1.2vw, 2rem)'}}/>
        </div>
      </Link>
    </div>
  );
}

export default BlogItems;