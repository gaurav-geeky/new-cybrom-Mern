//  child 1 jsx in  third project 

import Child5 from "./Child5"

const Child1 = ({naming}) => { 

    return ( 
        <> 
            <h1>hey this is Child 1</h1> 

            {/* <h2> {props.name} is {props.age} yr old lives in {props.city} </h2>  */} 

            
            
            <Child5 name={naming} /> 

        </>
    ) 
} 

export default Child1 
 

// here props become an object ( it works in { } form ) to get value from any object  . we can pass multiple values 



