import React from 'react'
import Logo from '../assets/logo.png'
import '../Styles/Navbar.css'
import { Instagram } from "@mui/icons-material"
import { YouTube } from "@mui/icons-material"
import { Facebook } from "@mui/icons-material"

function Navbar() {
  return (
    <div className='cont'>
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} style={{width: '100px'}}/>
                <div className='Links'>
                    <a to="/"> HOME </a>
                    <a to="/menu"> ABOUT </a>
                    <a to="/about"> REVIEWS </a>
                    <a to="/videos"> VIDEOS </a>
                    <a to="/contact"> CONTACTS </a> 
                </div>
            </div>

            <div className=''>
               
            <div className='rightSide'>
                <div className="socialMedia">
                    <Instagram />
                    <YouTube />
                    <Facebook />
                </div>
                <div className='button'>LET'S TALK</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar