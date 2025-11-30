import axios from 'axios';
import React, { useState, useEffect } from 'react'


const DisplayBooks = () => {
    const [data, setdata] = useState([]);

    const loadData = async () => {
        const api = "http://localhost:9999/displaybooks"
        const response = await axios.get(api);
        alert(response.data.msg);
        setdata(response.data.books);
    }

    useEffect(() => {
        loadData();
    }, []);

    const ans = data.map((key) => (
        <tr align='center'>
            <td>{key.bookname}</td>
            <td>{key.price}</td>
            <td>{key.authorId.authorname}</td>
            <td>{key.authorId.email}</td>

        </tr>
    ))

    return (
        <>
            <div>
                <h1> here Display many Books with their authors.</h1>

                <table width={600} border={1} align='center'>
                    <tr align='center'>
                        <th>Book</th>
                        <th>Price</th>
                        <th>Author </th>
                        <th> Email</th>
                    </tr>
                    {ans}
                </table>
            </div>
        </>
    )
}

export default DisplayBooks
