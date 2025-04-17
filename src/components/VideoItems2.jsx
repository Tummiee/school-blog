import React from 'react'

function VideoItems2({video, description, name}) {

    const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
        <div className="video-container">
            <video controls width="100%" height="100%">
                <source src={video} type="video/mp4" />
            </video>
            <h2>{name}</h2>
            <p>{extractedSentence}</p>
        </div>
  )
}

export default VideoItems2