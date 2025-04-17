import React from 'react'

function VideoItems3({video, description, name}) {

    const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
        <div className="video-container2">
            <video controls width="100%" >
                <source src={video} type="video/mp4" />
            </video>
            <h2>{name}</h2>
            <p>{extractedSentence}</p>
        </div>
  )
}

export default VideoItems3