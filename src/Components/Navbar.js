import React from 'react';
import './Navbar.css';
import logo from '../Assets/Icons/17.png';
import logo_youtube from '../Assets/icons8-instagram-50.png';
import logo_linkedin from '../Assets/icons8-linkedin-50.png';
import logo_instagram from '../Assets/icons8-youtube-50.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Sicma Logo Fundo Transparente" className='navbar-logo'/>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Work with us</a></li>
            </ul>
            <div className='icons-div'>
                <img src={logo_youtube} alt="YouTube Logo Fundo Transparente" className='icons-logo'/>
                <img src={logo_linkedin} alt="LinkedIn Logo Fundo Transparente" className='icons-logo'/>
                <img src={logo_instagram} alt="Instagram Logo Fundo Transparente" className='icons-logo'/>
            </div>
        </nav>
    );
};

export default Navbar;
