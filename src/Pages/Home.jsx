import React, { useEffect, useState } from 'react';
import BlogItems from '../components/BlogItems'
import VideoItems from '../components/VideoItems'
import '../Styles/Home.css'
import {Link} from 'react-router-dom';
import axios from 'axios';



function Home() {

    
  const [blogs, setBlogs] = useState([]);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  
  const fetchBlogs = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos`);
    setVideos(res.data);
  };

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
                {blogs.length > 0 ? (
                    blogs.slice(0, 3).map(({ id, description, title, mediaUrl }) => (
                    <BlogItems
                        key={id}
                        name={title}
                        description={description}
                        image={`${import.meta.env.VITE_API_URL}${mediaUrl}`}
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
                    {videos.length > 0 ? (
                        videos.slice(0, 4).map(({id,description,name,mediaUrl}) => (
                                <VideoItems
                                    key={id}
                                    name={name}
                                    description={description}
                                    video={`${import.meta.env.VITE_API_URL}${mediaUrl}`}
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