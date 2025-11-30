import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


let State = () => {

    let [change, setChange] = useState()



    let [info, setInfo] = useState({})

    useEffect(() => {
        let show = JSON.parse(localStorage.getItem("userInfo"))
        setInfo(show)
    }, []) 

    
    return (
        <>
            <div style={{ width: "100%", height: "85vh", backgroundColor: "lightgray" }}>
                <h1 style={{ fontSize: "40px", fontWeight: "bold" }}> this is state component</h1> <br />

                <Link to="/color"> color</Link> &ensp; &ensp;
                <Link to="/form"> form</Link>
                <br /> <br /> <br />

                <button style={{ marginTop: "60px", width: "80px", backgroundColor: "blue", color: "white", fontWeight: "bold", padding: "5px", borderRadius: "20px" }} onClick={() => setChange(!change)} >
                    {change ? "hide" : "show"}
                </button>

                <h1 style={{ display: change ? "block" : "none" }} >  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid? Repellat rem nihil velit aperiam! Dolores, rem excepturi odit nesciunt adipisci quis ducimus ad molestiae itaque consequuntur porro eius tempora enim suscipit corrupti autem? Mollitia molestias quae possimus sed eius.

                </h1>

                <br /> <br />

                <div> details of form </div> 
                <br /> 
                <p> {info.name} </p>
                <p> {info.email} </p>
                <p> {info.password} </p>



            </div>
        </>
    )
}
export default State

