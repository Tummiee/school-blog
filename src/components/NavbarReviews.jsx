import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import '../Styles/Navbar.css'
import { Instagram } from "@mui/icons-material"
import { YouTube } from "@mui/icons-material"
import { Facebook } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';

function Navbar() {

const [openLinks, setOpenLinks] = useState(false)

const toggleNavbar = () => {
      setOpenLinks(!openLinks)
}
const closeNavbar = () => setOpenLinks(false);


  return (
    <div className='cont'>
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} className='logoImg'/>
                <div className='Links'>
                    <Link to="/"> HOME </Link>
                    <Link to="/about"> ABOUT </Link>
                    <Link to="/reviews" style={{color: 'hsl(27, 77%, 65%)'}}> REVIEWS </Link>
                    <Link to="/videos"> VIDEOS </Link> 
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
                            <Link to="/" onClick={closeNavbar}> HOME </Link>
                            <Link to="/about" onClick={closeNavbar}> ABOUT </Link>
                            <Link to="/reviews" onClick={closeNavbar}> REVIEWS </Link>
                            <Link to="/videos" onClick={closeNavbar}> VIDEOS </Link> 
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='rightSideBox' style={{backgroundColor: '#424242'}}></div>
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