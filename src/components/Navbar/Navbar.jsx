import React, { useRef } from 'react'
import './Navbar.css';
import logo from '../../assets/logo_website.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoCloseSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = '0'
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px'
    }


    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <HiMenu onClick={openMenu} className='nav-mob-open' />
            <ul className='nav-menu' ref={menuRef}>
                <IoCloseSharp onClick={closeMenu} className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'>Portfolio</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink>
            </div>
        </div>
    )
}

export default Navbar