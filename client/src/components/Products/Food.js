import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion, useInView, useAnimation, usePresence, useAnimate } from 'framer-motion';

function Food() {
    const [food, setFood] = useState([]);
    const [initialFetch, setInitialFetch] = useState(true);


    useEffect(() => {
        if (initialFetch) {
        fetchImageData();
        setInitialFetch(false);
        }
    }, [initialFetch, food]); // Add 'food' to the dependency array to retrigger the useEffect when food changes



    const fetchImageData = async () => {
        try {
        const response = await axios.get('http://localhost:3001/food');
        const foodData = response.data;

        // Clear the existing data before setting new data
        setFood([]);
        setFood(foodData);
        } catch (error) {
        console.error('Error retrieving image data:', error);
        }
    };

        const mapFoodApp = food.map((food, index) => {

            return (
                <div key={food.id}>
                    {<motion.img
                        initial={{opacity: 0, y: 75}}
                        animate={{opacity: 1,y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 * index}}
                        className="feature2" src={`data:image/png;base64,${food.image}`} alt={food.name} />}
                </div>
            )
        })

        return (
            <div className="menu-product">
                {mapFoodApp}
            </div>
        );
    }

export default Food;