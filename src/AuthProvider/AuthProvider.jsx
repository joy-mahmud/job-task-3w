import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userdata, setUserdata] = useState({});
    const [loading, setLoading] = useState(true)
    console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }


    // logoout
    const logout = () => {
        const token = localStorage.getItem('access-token')
        if (token) {
            localStorage.removeItem('access-token')
            console.log('logged out')
        } else {
            window.open("http://localhost:5000/logout", "_self")
        }

    }

    useEffect(() => { 
        const token = localStorage.getItem('access-token')

        if(!token){
            getUser()
        }

        const authorization = `Bearer ${token}`
        console.log(authorization)
        axios.post('http://localhost:5000/checkUser', { authorization })
            .then(res => {
                setUserdata(res.data)
                setLoading(false)
            })
    }, [])
    const authInfo = { logout, userdata, loading, setLoading, setUserdata }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;