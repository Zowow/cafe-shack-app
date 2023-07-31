import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext)

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setAuthState(true)
        }
    }, [])

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data);
                setAuthState(false)
            }
        });
    };

    return (
        <div className='admin-login'>
            <h2>Cafe Shack CMS</h2>
            <input
                type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
                placeholder='Enter Admin Username'
            ></input>
            <input
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                placeholder='Enter Password'
            ></input>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;