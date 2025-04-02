import React from 'react'
import '../Styles/Footer.css'
import Logo from '../assets/logo.png'
import { Instagram } from "@mui/icons-material"
import { YouTube } from "@mui/icons-material"
import { Facebook } from "@mui/icons-material"


function Footer() {
  return (
    <>
        <div className='footerCont'>
            <h1>Lorem, ipsum dolor sit amet consectetur</h1>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus.</h1>
            <pre>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sed praesentium in iste? Quod, <br/>
                dolores ullam placeat esse porro quidem aliquam aperiam
                quis hic fugiat voluptatem quaerat totam dolore quos!
            </pre>
            <div className='FooterButton' style={{textShadow: 'none'}}>LET'S TALK</div>
        </div>
        <div className='footerCont2'>
            <div className='footerCont2-1'>
                <img src={Logo} style={{width: '100px'}}/>
                <div className='footerLinks'>
                    <a to="/"> HOME </a>
                    <a to="/menu"> ABOUT </a>
                    <a to="/about"> REVIEWS </a>
                    <a to="/videos"> VIDEOS </a>
                    <a to="/contact"> CONTACTS </a>   
                </div>
                <div className="footerSocialMedia">
                                    <Instagram />
                                    <YouTube />
                                    <Facebook />
                </div>
            </div>
            <div className='shoutouts'>
                <p>2025 EliDev</p>
                <p>Powered by bla bla bla</p>
            </div>
        </div>

    </>
    
  )
}

export default Footer