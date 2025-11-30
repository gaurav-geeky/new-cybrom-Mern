//  app.jsx   thid project 


import { Child2 } from "./My comp/Child2" 
// child is import in this way due to   named export method

import Child3 from "./My comp/Child3"
import Child4 from "./My comp/Child4"



import Child1 from "./My comp/Child1" 
import { Gi3dGlasses } from "react-icons/gi";    // icons in react    ICONS 

const App = () => {  

    let info = { 
        name: "jay", 
        age: 34, 
        city: "bhopal"

    }

    let fname = "vikas";  

    return ( 
        <>
            <Gi3dGlasses style={{color: "red", fontSize: "99"}} /> 

            <Child1 name="Data" age={34} city="Hyderabad" naming={fname} /> 
        {/* here if age in "  " it becomes string   */} 
        <br />  

            <Child2 contact = {234} city="Delhi" />
            {/*  now it will be access using destructre */} 
        <br />  

            < Child3 user3={info} /> 
        <br />  

            < Child4 user4={{...info}}  /> 

            {/*   < Child4 ...info  />  */}
        </>
    )
}

export default App



