import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Food from "./content_uploader/Food"
import FoodDisplay from "./content_uploader/FoodDisplay"
import Drink from "./content_uploader/Drink"
import DrinkDisplay from "./content_uploader/DrinkDisplay"
import Etc from "./content_uploader/Etc"
import EtcDisplay from "./content_uploader/EtcDisplay"
import ItemEdit from "./content_uploader/ItemEdit"
import Login from './Login';

function Admin() {
    const [authState, setAuthState] = useState(true);
    const [activeData, setActiveData] = useState("food");

    const handleActiveData = (event) => {
        setActiveData(event)
    }

    useEffect(() => {
        axios
        .get('http://localhost:3001/auth/valid', {
            headers: {
            accessToken: localStorage.getItem('accessToken'),
            },
        })
        .then((response) => {
            if (response.data.error) {
            setAuthState(true);
            } else {
            setAuthState(false);
            }
        });
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        setAuthState(true);
    };

        const currentData = () => {
            if (activeData === "food") {
                return (
                <div className="cms-content">
                    <h1>Food Data</h1>
                    <Food />
                    <FoodDisplay editComponent={ItemEdit} />
                </div>
                );
            } else if (activeData === "drinks") {
                return (
                <div className="cms-content">
                    <h1>Drink Data</h1>
                    <Drink />
                    <DrinkDisplay editComponent={ItemEdit}/>
                </div>
                );
            } else {
                return (
                <div className="cms-content">
                    <h1>Etc Data</h1>
                    <Etc />
                    <EtcDisplay editComponent={ItemEdit} />
                </div>
                );
            }
        };


    return (
        <div>
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {authState ? (
            <div>
                <Login />
            </div>
            ) : (
            <div className="cms">
                <nav className="cms-nav">
                <ul>
                    <Link className="cms-nav-link" to="/admin"
                    onClick={() => handleActiveData('food')}
                    >
                    Food
                    </Link>
                    <Link className="cms-nav-link" to="/admin"
                    onClick={() => handleActiveData('drinks')}
                    >
                    Drink
                    </Link>
                    <Link className="cms-nav-link" to="/admin"
                    onClick={() => handleActiveData('etc')}
                    >
                    Etc.
                    </Link>
                </ul>
                <button className="cms-logout" onClick={logout}>
                    Logout
                </button>
                </nav>
                <Switch>
                <Route path="/admin" exact>
                    {currentData}
                </Route>
                </Switch>
            </div>
            )}
        </AuthContext.Provider>
        </div>
    );
    }

export default Admin;
