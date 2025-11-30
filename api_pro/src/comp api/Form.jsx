
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'  // local form with navigator

function Form() {

    let [frmdata, setFrmdata] = useState({
        name: "", contact: "", city: "", email: ""
    })

    let navigator = useNavigate()

    function handleInput(e) {
        let { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }
    //                              userdata comes from  Data.json check it
    function finalsubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/userdata', frmdata)
            .then(() => alert("success.."))
            .catch((err) => alert(err))

        navigator('./api')
    }

    return (
        <>
            <h1> Sign up form </h1>

            <form action="" onSubmit={finalsubmit}>

                <label htmlFor=" "> Name </label>
                <input type="text" name="name" onChange={handleInput} /> <br /> <br /> 

                <label htmlFor=" "> Contact </label>
                <input type="text" name="contact" onChange={handleInput} />  <br /> <br /> 

                <label htmlFor=" "> City </label>
                <input type="text" name="city" onChange={handleInput} />  <br /> <br /> 

                <label htmlFor=" "> Email </label>
                <input type="text" name="email" onChange={handleInput} />  <br /> <br /> 

                <input type="submit" />
            </form>

            <hr />

        </>
    )
}
export default Form

/*  
to show data in form run both  (keep both onn ) 

a.   json-server --watch Data.json   ( to run this we need to go into this fild ) 
//   cd src  _____  cd comp api _____  cd data.json
b.   npm run dev 

*/