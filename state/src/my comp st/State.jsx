import { useState } from "react"; 

function State () { 

    let [sting, setSting] = useState ("cold drink")
    let [person, setPerson] = useState ( { 
        name: "vijay" , age: 33, city: "bhopal"
    })
    return ( 
        <>
        <h1 style={{ color: "blue"}}> sting value is __{sting} </h1>
        <h1 style={{ color: "red"}}> person information __  {person.city} </h1>

        <h5> hello im h5 in state jsx cybrom</h5>
        


        <h3 style={{ color: "brown"}}> ____ ☝️ date 16 july 2025</h3>
        </>
    )
} 

export default State 