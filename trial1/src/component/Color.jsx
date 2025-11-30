import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export let Color = () => {

    let [color, setcolor] = useState("lightpink")

    let [info, setInfo] = useState({  // to take form value in object form
        name: "", email: "", password: ""
    })

    useEffect(() => {
        let ok = JSON.parse(localStorage.getItem("userInfo"))
        setInfo(ok)
    }, [])

    return (
        <>
            <div style={{ width: "100%", height: "85vh", backgroundColor: color }}>
                <h1 style={{ color: "blue", fontSize: "40px" }}> this is color component</h1>

                <Link to="/form"> form</Link>   &ensp; &ensp; 
                <Link to="/"> state</Link>
                <br /> <br /> <br />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "red" }} onClick={() => setcolor("red")} > red btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black ", margin: "5px", backgroundColor: "lightblue" }} onClick={() => setcolor("blue")} > blue btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black ", margin: "5px", backgroundColor: "lightgreen" }} onClick={() => setcolor("lightgreen")} > green btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "lightyellow" }} onClick={() => setcolor("yellow")} > yellow btn </button>

                    <button style={{ width: "100px", height: "auto", border: "1px solid black", margin: "5px", backgroundColor: "white" }} onClick={() => setcolor("lightpink")} > reset btn </button>

                </div>

            </div>
        </>
    )
}



