import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


let Form = () => {

    let [info, setInfo] = useState({  // to take form value in object form
        name: "", email: "", password: ""
    })

    let Value = (e) => {   //                handle dynamic value & set in form. 
        let { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }


    let [showdata, setShowdata] = useState({})    //     to show data sm where. 

    let navigate = useNavigate()


    let final = (e) => {      //                        final submission pr form rok     ke   data console kiya
        e.preventDefault()
        console.log(info)
        //                                                      localStorage  set to   store value and  get to print anywhere
        localStorage.setItem("userInfo", JSON.stringify(info))
        let got = JSON.parse(localStorage.getItem("userInfo"))
        setShowdata(got)

        navigate('/')  // same path as we gave in app jsx 
    }


    return (
        <>

            <div style={{ width: "100%", height: "85vh", backgroundColor: "lightyellow" }} >
                <h1 style={{ fontSize: "40px", color: "red" }}> this is form component</h1>

                <Link to="/color"> color</Link>  &ensp; &ensp;  
                <Link to="/"> state</Link>
                <br /> <br /> <br />

                <form action="" onSubmit={final}>

                    <label htmlFor=""> NAME </label>
                    <input className="border-1 p-1 " type="text" name="name" onChange={Value} /> <br /> <br />

                    <label htmlFor=""> EMAIL </label>
                    <input className="border-1 p-1 " type="text" name="email" onChange={Value} /> <br /> <br />

                    <label htmlFor=""> PASSWORD </label>
                    <input className="border-1 p-1  " type="text" name="password" onChange={Value} />  <br /> <br />

                    click <input type="submit" />

                </form>
                <br /> <br />

                <h1> details of form </h1>

                <h1> name : {showdata.name}  </h1>
                <h1> email : {showdata.email}  </h1>
                <h1> password : {showdata.password}  </h1>
            </div>

        </>
    )
}
export default Form   
