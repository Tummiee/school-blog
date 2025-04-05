import React from 'react'

function VideoItems({image, description, name}) {

    const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
    <div className='videoCard'>
       <div style={{ backgroundImage: `url(${image})`, width: '25%', height: '15vh' }} className='bCImage2'></div>
       <div className='videoCardTexts'>
            <h2 style={{fontSize: 'clamp(1rem, 1.5vw, 2.5rem)'}}>{name}</h2>
            <pr style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.6rem)',
                color: 'hsl(0, 0.00%, 54.10%)'
            }}>{extractedSentence}</pr>
        </div> 
    </div>
  )
}

export default VideoItems