import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Login = () => {

    const [user, setuser] = useState({ name: "", email: "", password: "" });
    // const [token, setToken] = useState("");   // ✅ store token here!
    const navigate = useNavigate();



    const handleinput = async (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setuser({ ...user, [name]: value });
    }

    const handlesave = async () => {
        let api = `${import.meta.env.VITE_BACK}/login`;
        const response = await axios.post(api, user);

        // save token in state
        // setToken(response.data.token);   // ✅ CORRECT

        localStorage.setItem("token", response.data.token);

        console.log(response.data.user);
        alert(response.data.msg);
        setuser({});
        // navigate("/dashboard")
    }
    const token = localStorage.getItem("token")

    const userAuth = async () => {
        if (!token) return;

        let api = `${import.meta.env.VITE_BACK}/auth`;
        const response = await axios.get(api, {
            headers: { "auth-token": token }
        });

        console.log("auth data : ", response.data.token);
        localStorage.setItem("myname", response.data.user.name)
        navigate("/dashboard");
    }

    useEffect(() => {
        userAuth();
    }, [token])

    return (
        <>
            <div >

                <h1 className='text-blue-600 text-4xl font-bold text-center mt-5'> Welcome to the Login page </h1>


                <div className='w-120 p-5 border-white border-2 m-auto mt-[250px] bg-gray-900 rounded-2xl text-white flex flex-col'>

                    Enter Email
                    <input className="border w-full text-white p-2 rounded"
                        type="text"
                        name='email'
                        value={user.email || ""}
                        onChange={handleinput} />
                    <br />


                    Enter Password
                    <input className="border w-full text-white p-2 rounded"
                        type="text"
                        name='password'
                        value={user.password || ""}
                        onChange={handleinput} />

                    <div  className='flex justify-between items-center'>
                        <button
                            onClick={handlesave}
                            className='text-2xl w-50 m-auto mt-5  bg-blue-600 text-white'> Save</button>

                        <Link className='m-auto' to="/registration" > Registeration ? </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login; 
