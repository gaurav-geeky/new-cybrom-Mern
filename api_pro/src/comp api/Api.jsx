import axios from "axios"
import { useEffect, useState } from "react"

let Api = () => {

    let [showfrm, setShowfrm] = useState(false) // to edit data 1st show form.  becomes true(visible) on click edit 

    let [editdata, setEditdata] = useState({})  // now edit data 

    function handleEdit(e) {
        const { name, value } = e.target
        setEditdata({ ...editdata, [name]: value })
    }
    //                                      here handle  data being edited
    function finalEdit(e) {
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`, editdata)   // editdata.id  is ID   ko iss object me put krna hai .   
            .then(() => alert("updated..."))
    }

    //                                    delete always using id (unique)(with useEffect it delete immediatley , browser change on each delete)

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/userdata/${id}`)
            .then(() => alert("Deleted..!! "))
    }

    let [apidata, setApidata] = useState([])  // to show data in form

    //  get data  get data 
    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
            .then((res) => setApidata(res.data))
    }, [handleDelete])


    return (
        <>
            <h1> api comp </h1>
            <table border="2" text-align="center" >

                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                    <th> CONTACT </th>
                    <th> CITY </th>
                    <th> EMAIL </th>
                    <th> DELETE </th>
                    <th> EDIT </th>
                </tr>
                {
                    apidata.map((e) =>
                        <tr>
                            <td>{e.id} </td>
                            <td>{e.name} </td>
                            <td>{e.contact} </td>
                            <td>{e.city} </td>
                            <td>{e.email} </td>
                            <td> <button onClick={() => handleDelete(e.id)}> Delete </button> </td>
                            <td> <button onClick={() => (setShowfrm(true), setEditdata(e))}> Edit </button> </td>
                        </tr>
                    )
                }
            </table>
            <br />

            <hr />

            {showfrm &&
                <form action="" onSubmit={finalEdit} >
                    <label htmlFor="">Id</label>
                    <input type="text" name="id" value={editdata.id} hidden onChange={handleEdit} /> <br /> <br />

                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={editdata.name} onChange={handleEdit} /> <br /> <br />

                    <label htmlFor="">Contact</label>
                    <input type="text" name="contact" value={editdata.contact} onChange={handleEdit} /> <br /> <br />

                    <label htmlFor="">City</label>
                    <input type="text" name="city" value={editdata.city} onChange={handleEdit} /> <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={editdata.email} onChange={handleEdit} /> <br /> <br />

                    <input type="submit" />

                </form>}
        </>
    )
}
export default Api


