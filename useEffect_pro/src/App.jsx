import { useEffect, useState } from 'react'


function App() {
  let [count, setCount] = useState(0)
  let [name, setName] = useState("Samsung")

  useEffect ( ()=> console.log("working"), [count] ) 
  useEffect ( ()=> console.log("variable samsung"), [name] ) 

  return (
    <>

    <h1> App page </h1>
    <h2> {count} </h2>
    <button onClick={ ()=> setCount(count+1) }> +++ </button>  

    <h1> {name} </h1>
    <button onClick={ ()=> setName("var lenovo")}> change </button>

    </>
  )
}

export default App

