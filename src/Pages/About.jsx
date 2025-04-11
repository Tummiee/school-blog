import React from 'react'
import '../Styles/About.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function About() {
  return (
    <div className='aboutContainer'>
        <div className='aboutCont1'>

          <div className='aboutCont1R'>
              
              <h1 style={{fontSize: 'clamp(2.2rem, 3.1vw, 4rem)',
                          fontWeight: '500'
              }}>About Shore Crest Schools</h1>
              <p style={{
                  color: 'hsl(0, 0.00%, 54.10%)'
              }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                  Impedit commodi qui, accusamus ullam nesciunt mollitia quis<br/>
                  minus neque ut corporis assumenda iusto laudantium voluptatem<br/>
                  molestiae cumque praesentium? Culpa, ipsam similique.
              </p>
          </div>
          <div className='aboutImg'></div>
        </div>
        <div className='aboutCont2'>
          <div className='reviewCont' >
              <h1>Follow Along</h1>
              <div className='viewAll'>@shorecrest <OpenInNewIcon style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.7rem)',
                marginLeft: '10%'
              }}/></div>
          </div>
          <div className='aboutImgDesignPics'>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/creseimg1.jpg)'}}></div>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/creseimg3.jpg)'}}></div>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/creseimg2.png)'}}></div>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/creseimg4.jpg)'}}></div>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/114593.jpg)'}}></div>
              <div className='aboutImgDesign' style={{backgroundImage: 'url(/src/assets/Bimage1.jpg)'}}></div>
          </div>
        </div>
    </div>
  )
}

export default About