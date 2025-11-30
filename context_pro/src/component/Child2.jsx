import { useContext } from "react"  
//   used to consume data no need store.consumer

import { store } from "../App"

function Child2 () { 

    let ok = useContext(store)

    return (
        <>
        <h1 style={{ color: "pink"}}> this is child 2 being called in child 1 </h1>

        <h1> this is child2 in data (name var) : {ok} </h1>

        </>
    )

} 
export default Child2 



