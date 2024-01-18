import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { DiRuby } from "react-icons/di";



const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(!false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click? <IoCloseSharp /> : <FiAlignJustify />}></i>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                <li><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
                <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
            </ul>

            <div className='login-area flex'>
                <li>
                    <Link to='/hotels'>
                        <button className='primary-btn'>Book</button>
                    </Link>
                </li>
            </div>
        </div>
      </nav>


      <header>
        <div className='container flex_space'>
            <div className='logo'>
                <DiRuby />Motive.
            </div>
            <div className='contact flex_space'>
                <div className='box flex_space'>
                    <div className='icons'>
                        <i><CiClock2 /></i>
                    </div>
                    <div className='text'>
                        <h4>Working Hours</h4>
                        <Link to='/contact'>Monday-Sunday: 7:30am to 8.30pm</Link>
                    </div>
                </div>
            </div>
            <div className='contact flex_space'>
                <div className='box flex_space'>
                    <div className='icons'>
                        <i><CgMail /></i>
                    </div>
                    <div className='text'>
                        <h4>Email Us</h4>
                        <Link to='/contact'>zealotschrist@Gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
