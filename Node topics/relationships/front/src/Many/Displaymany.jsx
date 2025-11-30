import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

const Displaymany = () => {

    const [data, setdata] = useState([]);
    const [visible, setvisible] = useState(false);
    const [authid, setauthid] = useState("");
    const [bookname, setBookname] = useState("");
    const [price, setPrice] = useState("");


    const handlebooks = async (id) => {
        setvisible(true);
        setauthid(id)
    }
    const handleClose = () => setvisible(false);

    const loadData = async () => {
        const api = "http://localhost:9999/displaymany"
        const response = await axios.get(api);
        console.log(response.data.msg);
        setdata(response.data.authordata);
    }

    useEffect(() => {
        loadData();
    }, []);

    const submitBook = async (e) => {
        e.preventDefault();
        const api = "http://localhost:9999/addbook"
        const response = await axios.post(api, { authid, bookname, price });
        setvisible(false);
        loadData();
        alert(response.data.msg);
    }

    const ans = data.map((key) => (
        <>
            <tr align="center" >
                <td style={{ border: "1px solid black" }} >{key.authorname}</td>
                <td style={{ border: "1px solid black" }} >{key.email}</td>

                <td style={{ border: "1px solid black" }} >{
                    key.booksId.map((each) => (
                        <p >
                            Title: {each.bookname},
                            Price: {each.price}
                        </p>
                    ))
                }</td>

                <td style={{ border: "1px solid black" }} >
                    <button style={{ padding: "3px 7px", backgroundColor: "lightyellow", fontWeight: "bold" }} onClick={() => { handlebooks(key._id) }}> Add </button>
                </td>
            </tr>
        </>
    ))

    return (
        <>
            <section>
                <h1> Display one to many relationship </h1>
                <h3> 1 author has many books</h3>


                <table align='center' width={600} border={1}>
                    <tr align='center'>
                        <th> Name</th>
                        <th>Email </th>
                        <th> My Books</th>
                        <th>Add more Books</th>
                    </tr>
                    {ans}
                </table>


                {/*  form to add more books */}

                <Modal show={visible} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title> add another book here </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Book name</Form.Label>
                                <Form.Control type='text' value={bookname} onChange={(e) => { setBookname(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Enter Book price</Form.Label>
                                <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>

                            <Button onClick={submitBook}>Submit</Button>
                        </Form>
                    </Modal.Body>

                </Modal>

            </section>
        </>
    )
}

export default Displaymany; 
