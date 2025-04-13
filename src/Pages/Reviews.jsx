import React from 'react'
import {BlogUpdates} from '../Data/BlogUpdates'
import FeaturedReviewsItem from '../components/FeaturedReviewsItem'
import BlogItems from '../components/BlogItems'
import '../Styles/Reviews.css'

function Reviews() {
    
  return (
    <div className='reviewsContainer'>
        <div className='homeCont1'>

            <div className='homeCont1R'>
                <div className='welcome'>
                    <hr style={{
                        backgroundColor: 'hsl(27, 77%, 65%)',
                        height: '1px',
                        width: '15%',
                        border: 'none',
                        marginRight:'0',
                        marginLeft: '0'
                    }}/>
                </div>
                <h1 style={{fontSize: 'clamp(2.2rem, 4.5vw, 5rem)',
                            fontWeight: '800'
                }}>Reviews</h1>
                <p style={{
                    color: 'hsl(0, 0.00%, 54.10%)'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Impedit commodi qui, accusamus ullam nesciunt mollitia quis<br/>
                    minus neque ut corporis assumenda iusto laudantium voluptatem<br/>
                    molestiae cumque praesentium? Culpa, ipsam similique.
                </p>
            </div>
            <div className='homeImg'></div>
        </div>
            {BlogUpdates.slice(0, 1).map(({id,description,name,imageUrl}) => {
                            return(
                                <FeaturedReviewsItem
                                    key={id}
                                    name={name}
                                    description={description}
                                    image={imageUrl}
                                />
                            )
                        
                        })}
        <div className='reviewCont2'>
                <div className='blogCards'>
                    {BlogUpdates.slice(1).map(({id,description,name,imageUrl}) => {
                        return(
                            <BlogItems
                                key={id}
                                name={name}
                                description={description}
                                image={imageUrl}
                            />
                        )
                    
                    })}
                </div>
        </div>
        <div className='homeCont3'>
            <div className='mailingSubscriptionBox'>
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
    </div>
  )
}

export default Reviews