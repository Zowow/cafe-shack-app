import { NavLink, Switch, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import  { useState } from 'react';
import menuPlant from "../images/menu_plant.svg";
import imgCoffee from "../images/menu-product-coffee.svg";
import imgChair from "../images/menu-product-chair.svg";
import Food from "./Products/Food";
import Drinks from "./Products/Drinks";
import Etc from "./Products/Etc";
import { motion } from "framer-motion"

function Menu() {

    const [activeData, setActiveData] = useState("food");

    const handleActiveData = (event) => {
        setActiveData(event)
    }

    const currentData = () => {
        if (activeData === "food") {
            return <Food/>
        } else if (activeData === "drinks") {
            return <Drinks />
        } else {
            return <Etc/>
        }
    }

  return (
    <div className="menu">
      <section className="menu-features">
        <motion.img
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.25}}
          className="menu-plant" src={menuPlant} alt="menuPlant" />
        <ScrollLink
          to="menu-view"
          smooth={true}
          duration={500}
          className="menu-button"
        >
          View Menu
        </ScrollLink>
        <h1>Featured Product</h1>
        <div className="menu-features-images">
          <div className="feature f-img01"></div>
          <div className="feature f-img02"></div>
          <div className="feature f-img03"></div>
        </div>
        </section>
      <section id="menu-view" className="menu-view">
        <img className="menu-img-coffee" src={imgCoffee} alt="coffee" />
        <div className="menu-type">
          <NavLink
            to="/menu"
            className="menu-type-link"
            activeClassName="active-menu"
            onClick={() => handleActiveData('food')}
            isActive={() => activeData === 'food'}
          >
            Food
          </NavLink>
          <NavLink
            to="/menu"
            className="menu-type-link"
            activeClassName="active-menu"
            onClick={() => handleActiveData('drinks')}
            isActive={() => activeData === 'drinks'}
          >
            Drinks
          </NavLink>
          <NavLink
            to="/menu"
            className="menu-type-link"
            activeClassName="active-menu"
            onClick={() => handleActiveData('etc')}
            isActive={() => activeData === 'etc'}
          >
            Etc
          </NavLink>
            </div>
            <Switch>
                  <Route path="/menu" >{currentData()}</Route>
            </Switch>
        <img className="menu-img-chair" src={imgChair} alt="chair" />
      </section>
    </div>
  );
}

export default Menu;
