import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {

    const [user, setuser] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleinput = async (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setuser({ ...user, [name]: value });
    }

    const handlesave = async () => {
        let api = `${import.meta.env.VITE_BACK}/register`;
        const response = await axios.post(api, user);
        console.log(response.data);
        alert(response.data.msg);
        setuser({});
        navigate("/")
    }

    return (
        <>
            <div >

                <h1 className='text-blue-600 text-4xl font-bold text-center mt-5'> Welcome to the Registration page </h1>


                <div className='w-120 p-5 border-white border-2 m-auto mt-[250px] bg-gray-900 rounded-2xl text-white flex flex-col'>
                    Enter Username
                    <input
                        className="border w-full text-white p-2 rounded"
                        type="text"
                        name='name'
                        value={user.name || ""}
                        onChange={handleinput} />
                    <br />


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

                    <div className='flex justify-between items-center'>
                        <button
                            onClick={handlesave}
                            className='text-2xl w-20 m-auto mt-5  bg-blue-600 text-white'> Save</button>

                        <Link className='m-auto' to="/" > Login ? </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Registration; 
