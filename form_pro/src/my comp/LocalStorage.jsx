import { useState } from "react" //  show dynamic data below form 


export function LocalStorage() {

    let [frmdata, setFrmdata] = useState({
        username: "", email: "", password: ""
    }) 

    function handleInput(e) {
        let { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem('userdata', JSON.stringify(frmdata))
        let show = JSON.parse(localStorage.getItem('userdata')) 
        setShowdata(show)   

    }


    
    return (
        <>
            <h1> Sign up form </h1>
{/* want to go in next page no action */} 

            <form  onSubmit={handlesubmit}>
                <label htmlFor=" "> Name </label>
                <input type="text" name="name" onChange={handleInput} /> <br />

                <label htmlFor=" "> Email </label>
                <input type="text" name="email" onChange={handleInput} />  <br />

                <label htmlFor=" "> Password </label>
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