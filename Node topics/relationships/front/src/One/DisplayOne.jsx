import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

// display one 2 one data  get , save in state then display

const DisplayOne = () => {

    const [mydata, setmydata] = useState([]);

    const loadData = async () => {
        const api = "http://localhost:9999/onedisplay"
        const response = await axios.get(api);
        alert(response.data.msg);
        console.log(response.data.showdata);
        setmydata(response.data.showdata);
    }

    useEffect(() => {
        loadData();
    }, []);


    const ans = mydata.map((key) => (
            <>
                <tr align='center' >
                    <td> {key.userid.name} </td>
                    <td> {key.userid.email} </td>
                    <td> {key.job} </td>
                    <td> {key.position} </td>
                </tr>
            </>
        )
    )

    return (
        <>
            <section>
                <div>

                    <h1> display data of one to one. </h1>

                    <table width={600} align='center' border={1}>
                        <tr align='center'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Position</th>
                        </tr>
                        {ans}
                    </table>

                </div>
            </section>
        </>
    )
}

export default DisplayOne; 
