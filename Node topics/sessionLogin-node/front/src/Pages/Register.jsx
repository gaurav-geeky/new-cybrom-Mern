import React from 'react'
import { useState } from 'react';  
import axios from "axios";


const Register = () => {
    const [frm, setfrm] = useState({});

    const hanldeInput = (e) => {
        const { name, value } = e.target;
        setfrm({ ...frm, [name]: value });
    }

    const handleReg = async (e) => {
        e.preventDefault();
        let api = `${import.meta.env.VITE_BACK}/register`; 
        const response = await axios.post(api, frm); 
        alert(response.data.msg); 
    }

    return  (
        <>
            <section>

                <h1> Registration Page </h1>

                <form action="">
                    Enter Name : <input placeholder='name' type="text" name='name' onChange={hanldeInput} />

                    Enter Email : <input placeholder='email' type="text" name='email' onChange={hanldeInput} />

                    Enter Password : <input placeholder='password' type="text" name='password' onChange={hanldeInput} />

                    <button onClick={handleReg}>Register</button>
                </form>

            </section>
        </>
    )
}

export default Register;
