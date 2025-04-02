import React from 'react';

function BlogItems({ image, name, description }) {
  // Extract the second sentence safely
  const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
    <div className='blogCard'>
      <div style={{ backgroundImage: `url(${image})`, width: '100%', height: '45vh' }} className='bCImage'></div>
      <h2 style={{fontSize: 'clamp(1rem, 2.8vw, 3.1rem)'}}>{name}</h2>
      <pr style={{
        fontSize: 'clamp(1rem, 1.3vw, 2rem)',
        color: 'hsl(0, 0.00%, 54.10%))'
      }}>{extractedSentence}</pr>
    </div>
  );
}

export default BlogItems;