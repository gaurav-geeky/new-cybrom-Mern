
import { useEffect, useState } from "react"


function LocalShow() {

    let [info, setInfo] = useState({
        username: "", email: "", password: ""
    })

    useEffect ( ()=> {
        let here = JSON.parse(localStorage.getItem("userdata"))
        setInfo(here)
    } , [] )

    return (
        <>
            <br />
            <hr />
            <h1> hello local show</h1>  <br />

            <h1> here information </h1> <br />

            <h1> user name :  {info.name} </h1>
            <h1>  email :  {info.email} </h1>
            <h1> password :  {info.password} </h1>

        </>
    )
}
export default LocalShow


/*   how to take take in this componenet from   other component 

//      The useEffect Hook in React is a powerful tool for managing side effects in functional components. Side effects include tasks like fetching data, updating the DOM, setting up subscriptions, or managing timers.  


 useEffect(() => {
    code to perform something 
  }, [ ] ); 

*/
