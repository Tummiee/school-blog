import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import '../Styles/Navbar.css'
import { Instagram } from "@mui/icons-material"
import { YouTube } from "@mui/icons-material"
import { Facebook } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
      setOpenLinks(!openLinks)
}

  return (
    <div className='cont'>
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} className='logoImg'/>
                <div className='Links'>
                    <a to="/"> HOME </a>
                    <a to="/menu"> ABOUT </a>
                    <a to="/about"> REVIEWS </a>
                    <a to="/videos"> VIDEOS </a>
                    <a to="/contact"> CONTACTS </a> 
                </div>
            </div>

            <div className=''>
                <div id={openLinks ? "open" : "close"}>
                    <div className='hiddenLinks'>
                            <div className='menuIcon2'>
                                <button>
                                    <CloseIcon onClick={toggleNavbar}/>
                                </button>
                            </div>
                            <a to="/"> HOME </a>
                            <a to="/menu"> ABOUT </a>
                            <a to="/about"> REVIEWS </a>
                            <a to="/videos"> VIDEOS </a>
                            <a to="/contact"> CONTACTS </a> 
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='rightSideBox'></div>
                    <div className="socialMedia">
                        <Instagram />
                        <YouTube />
                        <Facebook />
                    </div>
                    <div className='button'>LET'S TALK</div>
                    <div className='menuIcon'>
                        <button>
                            <MenuIcon onClick={toggleNavbar}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar