import React from 'react'
import {BlogUpdates} from '../Data/BlogUpdates'
import BlogItems from '../components/BlogItems'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeCont1'>

            <div>
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
                <h1>This is Shore Crest Schools</h1>
                <h2>Motto: Roots to grow, wings to fly</h2>
                <pre style={{
                    color: 'hsl(0, 0.00%, 54.10%)'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Impedit commodi qui, accusamus ullam nesciunt mollitia quis<br/>
                    minus neque ut corporis assumenda iusto laudantium voluptatem<br/>
                    molestiae cumque praesentium? Culpa, ipsam similique.
                </pre>
                <div className='homeButton'>JOIN INSIDER</div>
            </div>
            <div className='homeImg'></div>
        </div>
        <div className='homeCont2'>
                <div className='reviewCont'>
                    <h1>Latest Reviews</h1>
                    <div className='viewAll'>VIEW ALL</div>
                </div>
                <div className='blogCards'>
                    {BlogUpdates.map(({id,description,name,imageUrl}) => {
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
                        <h1 style={{fontSize: 'clamp(2rem, 4.1vw, 5rem)'}}>Join Mailing List</h1>
                        <p style={{fontSize: 'clamp(1rem, 2.1vw, 2rem)',
                                    color: 'hsl(0, 0.00%, 54.10%)'
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

export default Home