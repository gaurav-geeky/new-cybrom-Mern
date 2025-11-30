import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Signform() {

    let [signfrm, setSignfrm] = useState({
        name: "", email: "", mobile: "", password: ""
    })

    let handleInput = (e) => {
        let { name, value } = e.target
        setSignfrm({ ...signfrm, [name]: value })
    }

    let move = useNavigate() 


    let handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("userdata", JSON.stringify(signfrm))

        if (signfrm.name == "") {
            alert(" enter name")
        }

        else if (signfrm.email == "") {
            alert(" Enter email"); 
        }
        else if (!(signfrm.email.includes("@") && signfrm.email.includes(".com"))) {
            alert(" please enter valid email only ");
        } 
  
        else if (isNaN(signfrm.mobile)) {
            alert(" Enter Mobile Number");
        }

        else if (signfrm.mobile.length != 10) {
            alert(" Please enter valid Number ");   
        }

        else if (!(signfrm.password.match(/[a-z]/) &&
            signfrm.password.match(/[A-Z]/) &&
            signfrm.password.match(/[ 1234567890 ]/) &&
            signfrm.password.match(/[ !@#$%^&*() ]/))
        ) {
            alert(" please use special chars in Password");
        }

        move('/login')

    }


    return (
        <>
            <section className=" w-full bg-amber-100  flex flex-col items-center  "> 

                <h1 className=" text-2xl p-3 font-black  "> Sign-up here</h1>

                <form className=" w-150 p-3 pl-9 text-1xl rounded-3xl border-none bg-emerald-100  " onSubmit={handleSubmit}>

                    <label htmlFor="">Name</label> &ensp;
                    <input className=" border-1 p-1" type="text" name="name" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Email</label> &ensp;
                    <input className=" border-1 p-1 " type="text" name="email" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Mobile</label> &ensp;
                    <input className=" border-1 p-1 " type="text" name="mobile" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Password</label> &ensp;
                    <input className=" border-1 p-1 " type="text" name="password" onChange={handleInput} /> <br /> <br />

                    <input className=" border-1 rounded-lg p-1 bg-blue-600 text-white" type="submit" />

                </form>

            </section>

        </>
    )
}

export default Signform
