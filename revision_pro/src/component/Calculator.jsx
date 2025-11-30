import React, { useState } from 'react'

function Calculate() {

    let [count, setCount] = useState("") 

    function result() { 
        try {
            setCount(eval(count).toString());  
        }
         catch {
            setCount("error...!")
        }  
    } 

    function otherBtn(each) {
        setCount(count + each); 
    } 

    function clear() {
        setCount(""); 
    } 

    function del() {
        setCount( count.slice(0, -1))
    }

    return (
        <>
            <h1> calculator</h1>

            <article style={{ width: "200px", backgroundColor: "lightyellow" }}>

                <input style={{ padding: "10px", width: "170px", marginBottom: "3px", fontSize: "18px", border: "1px solid black"}} type="text" value={count} />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)",  }}>
                    {
                        ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/", "%"].map(
                            (each) =>
                                each === "=" ?

                                    (<button style={{padding: "10px", margin: "2px", fontSize: "18px", border: "1px solid black"  }} key={each} onClick={() => result()} >{each} </button>) :

                                    (<button style={{padding: "10px", margin: "2px", fontSize: "18px", border: "1px solid black" }} key={each} onClick={() => otherBtn(each)}> {each} </button>)
                        )
                    }

                    <button style={{backgroundColor: "red", color: "white", padding: "10px", margin: "2px", fontSize: "18px", border: "1px solid black" }} onClick={() => clear()}> AC </button>

                    <button style={{ gridColumn: "span 2", backgroundColor: "blue", color: "white", padding: "10px", margin: "2px", fontSize: "18px", border: "1px solid black" }} onClick={() => del()}> DELETE </button>  
                    

                </div> 

            </article> 
            <br /> <br /> 

        </>
    )
}

export default Calculate

