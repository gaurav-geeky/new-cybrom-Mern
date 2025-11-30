
import { useState } from "react"
import { useNavigate } from 'react-router-dom'  // local form with navigator


 function LocalForm() {
//                                           to show form data objec me 
    let [frmdata, setFrmdata] = useState({  
        username: "", email: "", password: ""
    }) 

    let [showdata, setShowdata] = useState({ })  // to show data below form 

  let navigator = useNavigate();   // to navigate one to another page

    function handleInput(e) {
        let { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        console.log(frmdata)
        
        localStorage.setItem('userdata', JSON.stringify(frmdata))  // to set data in local storeage  setItem 

        let show = JSON.parse(localStorage.getItem('userdata'))  // to print data somewhere need  getItem (kahi bhi )
        setShowdata(show)

        navigator( './localshow') 

    }

    
    return (
        <>
            <h1> Sign up form local form </h1>
{/* want to go in next page no action */} 

            <form  onSubmit={handlesubmit}>
                <label htmlFor=" "> Name_ </label>
                <input type="text" name="name" onChange={handleInput} /> <br />

                <label htmlFor=" "> Email_ </label>
                <input type="text" name="email" onChange={handleInput} />  <br />

                <label htmlFor=" "> Password_ </label>
                <input type="text" name="password" onChange={handleInput} />  <br />

                <input type="submit" />
            </form> 

            <hr /> 

            <h1> username - {showdata.name} </h1>
            <h1> email - {showdata.email} </h1>
            <h1> password - {showdata.password} </h1>
        </>
    )
} 
export default LocalForm