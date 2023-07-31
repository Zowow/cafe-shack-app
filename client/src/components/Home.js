import React from 'react';
import { Link } from "react-router-dom"
import { Link as ScrollLink, Element } from "react-scroll"
import { motion } from "framer-motion"
import heroImage from "../images/hero-image-1.svg"
import infoImage from "../images/info-image.svg"
import { Icon } from '@iconify/react';

function Home() {
    return (
    <div>
        <section className='hero'>
            <div className='hero-content'>
                <div
                className='hero-content-top item'>
                        <motion.h1
                            initial={{opacity: 0, y: 75}}
                            animate={{opacity: 1,y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25}}
                            className='hero-title space'>Indulge in Flavors and Comfort</motion.h1>
                        <motion.h2
                            initial={{opacity: 0, y: 75}}
                            animate={{opacity: 1,y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25}}
                            className='hero-subtitle space'>Discover a Taste Sensation at Our Café Shop</motion.h2>
                        <motion.p
                            initial={{opacity: 0, y: 75}}
                            animate={{opacity: 1,y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25}}
                            className='hero-description space'>Whether you're seeking a moment of relaxation or a quick bite with friends, our café is the perfect destination to unwind and savor every sip and bite. Join us and embark on a journey of flavors and comfort that will leave you craving for more.</motion.p>
                    <div className='block'>
                        <ScrollLink to="info" smooth={true} duration={500}
                            className="hero-button">Discover Us</ScrollLink>
                        <Link to ="/menu" className="hero-button">Unlock Our Delights</Link>
                    </div>
                </div>
                <motion.img
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.75}}
                    className='hero-content-image'
                    src={heroImage}
                    alt='heroImage'
                />
            </div>
            <div
                className='hero-feature'>
                <div></div>
            </div>
            </section>
        <Element name="info">
        <section className='info'>
            <div className='info-opening item'>
                <h2 className='info-opening-title'>OPENING HOURS</h2>
                <div className='info-opening-date'>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                    <div className='info-opening-date-day'><span>MONDAY</span><span>7:00 am - 9:00 pm</span></div>
                </div>
            </div>
            <div className='info-location'>
                <div className='info-location-map'>
                    <iframe className='info-google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15366.328784590816!2d120.5751944!3d15.6672215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396cb90be0ec2e7%3A0xb3aae5a6dae73c43!2sCafe%20Shack%20Ph!5e0!3m2!1sen!2sph!4v1690713902893!5m2!1sen!2sph" loading="lazy"></iframe>
                </div>
                <a className="info-icon space" href="mailto:example@example.com"><Icon icon="ic:outline-email" /><span>email@email.com</span></a>
                <div className='info-icon'><Icon icon="ic:outline-phone" /><span>09123456789</span></div>
            </div>
            <img
                className='info-image'
                src={infoImage}
                alt='infoimage'
            />
            </section>
        </Element>
        </div>
    );
}

export default Home;