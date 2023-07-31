import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {motion, useInView, useAnimation } from "framer-motion"

function Drinks() {

    const [drink, setDrink] = useState([]);
    const [initialFetch, setInitialFetch] = useState(true);

    useEffect(() => {
        if (initialFetch) {
            fetchImageData();
            setInitialFetch(false);
        }
    }, [initialFetch]);

    const fetchImageData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/drink');
        const drinksData = response.data;

    setDrink(drinksData);
    } catch (error) {
        console.error('Error retrieving image data:', error);
    }
    };

    const mapDrinksApp = drink.map((drink, index) => {

        return (
            <div key={drink.id} className='menu-feature'>
                {<motion.img
                    initial={{opacity: 0, y: 75}}
                    animate={{opacity: 1,y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 * index}}
                    className="feature2" src={`data:image/png;base64,${drink.image}`} alt={drink.name} />}
            </div>
        )
    })

    return (
        <div className="menu-product">
            {mapDrinksApp}
        </div>
     );
}

export default Drinks;