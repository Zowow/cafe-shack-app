import React from 'react';
import logo from "../images/logo.png";
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import google from "../images/google.svg"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className='footer-details'>
                <img
                    className='footer-logo'
                    src={logo} alt="logo"
                />
                <div className='socials'>
                    <img
                        className='socials-link'
                        src={twitter}
                        alt="twitter"
                    />
                    <img
                        className='socials-link'
                        src={facebook}
                        alt="facebook"
                    />
                    <img
                        className='socials-link'
                        src={google}
                        alt="google"
                    />
                </div>
            </div>
            <div className='sitemap'>
                <div className='h3'>Site Map</div>
                <Link to="/" className="sitemap-link" >Home</Link>
                <Link to="/Menu" className="sitemap-link" >Menu</Link>
                <Link to="/contact" className="sitemap-link" >Contact</Link>
            </div>
        </footer>
    );
}

export default Footer;