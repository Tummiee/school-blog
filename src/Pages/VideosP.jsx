import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Videos.css'

import VideoItems2 from '../components/VideoItems2'
import VideoItems3 from '../components/VideoItems3'

function VideosP() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
      }, []);
    
      const fetchVideos = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos`);
        setVideos(res.data);
      };

    const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const paginatedVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (startIndex + itemsPerPage < videos.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className='videosContainer'>
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
            }}>Videos</h1>
            <p style={{
                color: 'hsl(0, 0.00%, 54.10%)',
                fontSize: 'clamp(1.1rem, 1.5vw, 2.4rem)'
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Impedit commodi qui, accusamus ullam nesciunt mollitia quis<br/>
                minus neque ut corporis assumenda iusto laudantium voluptatem<br/>
                molestiae cumque praesentium? Culpa, ipsam similique.
            </p>
        </div>
        <div className='homeImg' style={{backgroundImage: 'url(/src/assets/african-kid-enjoying-life.jpg)'}}></div>
        </div>

        <div className='homeCont2 video'>
            <div className='latestVidCont' style={{display: 'flex',
                                                   flexDirection: 'column',
                                                   gap: '2rem'
                                                 }}>
                <div className='Vheading'>
                    <h1>Latest Videos</h1>
                    <p style={{fontSize: 'clamp(1.2rem, 1.7vw, 2.4rem)',
                        color: 'hsl(0, 0.00%, 54.10%)'
                    }}>
                        Pellentesque massa hendrerit maecenas sit non venenatis sit 
                        mauris interdum egestas lectus id et convallis blandit
                    </p>
                </div>
                <div className='latestVideos'>
                {videos.slice(0, 2).map(({id,description,name,mediaUrl}) => {
                        return(
                            <VideoItems2
                                key={id}
                                name={name}
                                description={description}
                                video={`${import.meta.env.VITE_API_URL}${mediaUrl}`}
                            />
                        )                                        
                    })}
                </div>
            </div>
            <div className='allVideosCont' style={{marginTop: '5%'}}>
                <div className='Vheading allVids'>
                    <h1>All Videos</h1>
                    <p style={{fontSize: 'clamp(1.2rem, 1.8vw, 2.4rem)',
                        color: 'hsl(0, 0.00%, 54.10%)'
                    }}>
                        Pellentesque massa hendrerit maecenas sit non venenatis sit 
                        mauris interdum egestas lectus id et convallis blandit
                    </p>
                </div>
                <div className='allVideos'>
                    {paginatedVideos.map(({id,description,name,mediaUrl}) => {
                        return(
                            <VideoItems3
                                key={id}
                                name={name}
                                description={description}
                                video={`${import.meta.env.VITE_API_URL}${mediaUrl}`}
                            />
                        )                                        
                    })}
                </div>
                <div className="pagination-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
                    <button onClick={prevPage} disabled={currentPage === 0} style={{borderTopLeftRadius: '10px',
                                                                                    borderBottomLeftRadius: '10px'
                                                                                    }}>Previous</button>
                    <button onClick={nextPage} disabled={startIndex + itemsPerPage >= videos.length}style={{borderTopRightRadius: '10px',
                                                                                    borderBottomRightRadius: '10px'
                                                                                    }}>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideosP