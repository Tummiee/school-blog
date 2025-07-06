import React, {useState } from 'react';
import FeaturedReviewsItem from '../components/FeaturedReviewsItem'
import BlogItems from '../components/BlogItems'
import { BlogUpdates } from '../Data/BlogUpdates';
import '../Styles/Reviews.css'
import {Link} from 'react-router-dom';

function Reviews() {


     const itemsPerPage = 6;
      const [currentPage, setCurrentPage] = useState(0);
    
      const startIndex = currentPage * itemsPerPage;
      const paginatedBlogs = BlogUpdates.slice(startIndex, startIndex + itemsPerPage);
    
      const nextPage = () => {
        if (startIndex + itemsPerPage < BlogUpdates.length) {
          setCurrentPage(prev => prev + 1);
        }
      };
    
      const prevPage = () => {
        if (currentPage > 0) {
          setCurrentPage(prev => prev - 1);
        }
      };
    
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
            <div className='homeImg' style={{backgroundImage: 'url(/src/assets/africanKid.jpg)'}}></div>
        </div>
            {BlogUpdates.slice(0, 1).map((blog) => {
                            return(
                                <FeaturedReviewsItem
                                   image={blog.imageUrl}
                                   id={blog.id}
                                    name={blog.name}
                                    description={blog.description}
                                />
                            )
                        
                        })}
        <div className='reviewCont2'>
                <div className='blogCards'>
                    {paginatedBlogs.slice(1).map((blog) => (
                    <Link className='blogLink' style={{textDecoration: 'none', color: 'inherit', display: 'inline-block'}} to={`/blog/${blog.id}`} key={blog.id}>
                        <BlogItems
                        image={blog.imageUrl}
                        name={blog.name}
                        description={blog.description}
                        />
                    </Link>
                    ))}
                </div>
                <div className="pagination-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '40px' }}>
                                    <button onClick={prevPage} disabled={currentPage === 0} style={{borderTopLeftRadius: '10px',
                                                                                                    borderBottomLeftRadius: '10px'
                                                                                                    }}>Previous</button>
                                    <button onClick={nextPage} disabled={startIndex + itemsPerPage >= BlogUpdates.length}style={{borderTopRightRadius: '10px',
                                                                                                    borderBottomRightRadius: '10px'
                                                                                                    }}>Next</button>
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