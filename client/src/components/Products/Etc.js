import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {motion, useInView, useAnimation } from "framer-motion"

function Etc() {

    const [etc, setEtc] = useState([]);
    const [initialFetch, setInitialFetch] = useState(true);


    useEffect(() => {
        if (initialFetch) {
            fetchImageData();
            setInitialFetch(false);
        }
    }, [initialFetch]); 


    const fetchImageData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/etc');
        const etcData = response.data;

    setEtc(etcData);
    } catch (error) {
        console.error('Error retrieving image data:', error);
    }
    };

    const mapEtcApp = etc.map((etc, index) => {

        return (
            <div key={etc.id}>
                {<motion.img
                    initial={{opacity: 0, y: 75}}
                    animate={{opacity: 1,y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 * index}}
                    className="feature2" src={`data:image/png;base64,${etc.image}`} alt={etc.name} />}
            </div>
        )
    })

    return (
        <div className="menu-product">
            {mapEtcApp}
        </div>
     );
}

export default Etc;