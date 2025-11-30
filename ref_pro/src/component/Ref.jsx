import React, { useRef } from 'react'


function Ref() { 

  let refer = useRef() 
  
  function change() {
    refer.current.value = "typecast" 
    refer.current.style = "padding: 5px; border: 4px solid red" 
    //  here style can be given using  .style with normal css 
    // no need   cssText 
  } 


  return (
    <> 

    <h1> this is Reference component </h1> 

    <input type="text" name="" ref={refer} />  <br /> 
    <button onClick={change}> refer chng</button>
      
    </>
  )
}

export default Ref

// The useRef hook in React allows the creation of a mutable reference object that persists across component re-renders without causing a re-render when its current property is updated.   









