import React, { useState } from 'react';
import { Switch, Route, Link, NavLink} from "react-router-dom"
import Home from "./Home"
import Menu from "./Menu"
import Contact from "./Contact"
import Footer from "./Footer"
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';

function Header() {

    const [showLink, setShowLink] = useState(false)

    const handleShowLink = () => {
        setShowLink(!showLink)
    }

    return (
    <div>
        <header>
            <div className='header-nav'>
                <img
                    className='header-logo'
                        src={logo}
                        alt='logo'
                />
                <nav className="header-links" id={showLink ? "hidden" : ""}>
                    <NavLink exact to="/" className="navlink" activeClassName="active" onClick={handleShowLink}>Home</NavLink>
                    <NavLink to="/menu" className="navlink" activeClassName="active"  onClick={handleShowLink}>Menu</NavLink>
                    <NavLink to="/contact" className="navlink" activeClassName="active" onClick={handleShowLink}>Contact</NavLink>
                </nav>
                    <button className="header-show" onClick={handleShowLink}>
                        <Icon icon="iconamoon:menu-burger-horizontal-bold" height="25px" />
                    </button>
            </div>
            <Switch>
                <Route exact path="/menu"><Menu/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </header>
        <Footer/>
    </div>
    );
}

export default Header;