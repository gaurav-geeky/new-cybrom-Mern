import React from 'react'
import { useState } from 'react';
import axios from "axios";

const FormMany = () => {
    const [mydata, setmydata] = useState({});

    const handleinput = async (e) => {
        const { name, value } = e.target;
        setmydata({ ...mydata, [name]: value });
    }

    const handlesave = async () => {
        console.log("save")
        const api = "http://localhost:9999/manysave"
        const response = await axios.post(api, mydata);

        alert(response.data);
        console.log(response.data);
        setmydata({}); 
    }

    return (
        <>
            <section>

                <h1> Form to fill many to many relationships.. </h1>

                <div>
                    Author name: <input type="text" name='authorname' onChange={handleinput}
                        value={mydata.authorname || ""} />

                    <br />
                    Author email: <input type="text" name='email' onChange={handleinput}
                        value={mydata.email || ""} />

                    <br />
                    Book Title : <input type="text" name='bookname' onChange={handleinput}
                        value={mydata.bookname || ""} />

                    <br />
                    Book Price: <input type="text" name='price' onChange={handleinput}
                        value={mydata.price || ""} />

                    <br />
                    <button onClick={handlesave}>save</button>
                </div>

            </section>
        </>
    )
}

export default FormMany; 
