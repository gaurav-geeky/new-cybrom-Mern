import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Formone = () => {
    const [mydata, setmydata] = useState({});

    const handleinput = async (e) => {
        const { name, value } = e.target;
        setmydata({ ...mydata, [name]: value });
    }

    const handlesave = async () => {
        console.log("save")
        const api = "http://localhost:9999/onesave"
        const response = await axios.post(api, mydata);

        alert(response.data.msg);
        console.log("user model : ", response.data.usermodel);
        console.log("career model : ", response.data.carrermodel); 
        setmydata({}); 
    }

    return (
        <>
            <section>

                <h1> Form to fill One to One relationships.. </h1>

                <div>
                    enter name: <input type="text" name='name' onChange={handleinput} 
                    value={mydata.name || ""} />

                    <br />
                    enter email: <input type="text" name='email' onChange={handleinput} 
                    value={mydata.email || ""}/>

                    <br />
                    enter job: <input type="text" name='job' onChange={handleinput} 
                    value={mydata.job || ""}/>

                    <br />
                    enter position: <input type="text" name='position' onChange={handleinput} 
                    value={mydata.position || ""}/>

                    <br />
                    <button onClick={handlesave}>save</button>
                </div>
            </section>
        </>
    )
}

export default Formone; 
