import React from 'react'
import { Link } from 'react-router-dom';

function FeaturedReviewsItem({ id, image, name, description }) {

    const extractedSentence = description?.split('. ')[1] ? description.split('. ')[1] + '.' : description;

  return (
    <div className='featuredReview'>
        <div style={{ backgroundImage: `url(${image})`, borderRadius: '20px' }} className='fRImg'></div>
        <div className='fRright'>
            <h5 style={{color: 'hsl(27, 77%, 65%)'}}>FEATURED REVIEWS</h5>
            <h1 style={{fontSize: 'clamp(1.4rem, 3.4vw, 4.1rem)',
                        fontWeight: '800'
            }}>{name}</h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.2vw, 2rem)',
              color: 'hsl(0, 0.00%, 54.10%)'
            }}>{extractedSentence}</p> 
            <Link
              to={`/blog/${id}`}
              style={{ marginTop: '2%', textDecoration: 'none', display: 'inline-block' }}>
              <div className='homeButton'
              style={{marginTop: '2%'}}>READ MORE</div>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedReviewsItem