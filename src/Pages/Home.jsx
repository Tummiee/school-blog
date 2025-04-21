import React from 'react'
import {BlogUpdates} from '../Data/BlogUpdates'
import BlogItems from '../components/BlogItems'
import {Videos} from '../Data/Videos'
import VideoItems from '../components/VideoItems'
import '../Styles/Home.css'
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className='homeContainer'>
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
                    <h5>WELCOME</h5>
                </div>
                <h1 style={{fontSize: 'clamp(2.2rem, 3.1vw, 4rem)',
                            fontWeight: '500'
                }}>This is Shore Crest Schools</h1>
                <h2 style={{fontSize: 'clamp(1.2rem, 2.1vw, 2.4rem)',
                            fontWeight: '500'
                }}>Motto: Roots to grow, wings to fly</h2>
                <p style={{
                    color: 'hsl(0, 0.00%, 54.10%)'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Impedit commodi qui, accusamus ullam nesciunt mollitia quis<br/>
                    minus neque ut corporis assumenda iusto laudantium voluptatem<br/>
                    molestiae cumque praesentium? Culpa, ipsam similique.
                </p>
                <div className='homeButton'>JOIN INSIDER</div>
            </div>
            <div className='homeImg'></div>
        </div>
        <div className='homeCont2'>
                <div className='reviewCont'>
                    <h1>Latest Reviews</h1>
                   <Link to="/reviews" style={{textDecoration: 'none'}}><div className='viewAll'>VIEW ALL</div></Link>
                </div>
                <div className='blogCards'>
                {BlogUpdates.length > 0 ? (
                    BlogUpdates.slice(0, 3).map(({ id, description, name, imageUrl }) => (
                    <BlogItems
                        key={id}
                        name={name}
                        description={description}
                        image={imageUrl}
                    />
                    ))
                ) : (
                    <div className="no-blogs">📝 No blog post yet.</div>
                )}
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
        <div className='homeCont4'>
        <h1 style={{fontSize: 'clamp(2.2rem, 3.1vw, 4rem)',
                            fontWeight: '500'
                }}>Latest Videos</h1>
        <div className='homeCont3body'>
            <div className='homeCont3Left'>
                <div className='homeCont3Video'>
                    <video width="100%" autoPlay loop muted className="video-bg">
                        <source src="/Videos/cresevideo1.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='homeCont3Right'>
                <div className='videoCards'>
                    {Videos.length > 0 ? (
                        Videos.slice(0, 4).map(({id,description,name,video}) => (
                                <VideoItems
                                    key={id}
                                    name={name}
                                    description={description}
                                    video={video}
                                />
                            ))
                        ) : (
                            <div className="no-blogs">📝 No video yet.</div>
                    )}
                </div> 
                        <div className='vAVideos'>VIEW ALL VIDEOS</div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Home