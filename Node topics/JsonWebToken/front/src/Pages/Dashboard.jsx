import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const name = localStorage.getItem("myname");
    const navigate = useNavigate();

    useEffect(() => {
        if (!name) {
            navigate("/");
        }
    }, [])

    const logout = () => {
        localStorage.clear();  
        navigate("/");
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl text-red-700'> welcome to Dashboard </h1>
                <p>Helo, {name}. How are you ? </p>
                <button onClick={logout}> Logout</button>
            </div>





        </div>
    )
}

export default Dashboard
