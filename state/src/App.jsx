import { useState } from "react";
import State from "./my comp st/State";

function App() {

  let [name, setName] = useState("cybrom")    // cybrom is initial value /   // name , setname is var & func 
  let [age, setAge] = useState(89)
  let [contact, setCon] = useState(12346)

  function fun() {
    setName("react js")
  }
  function Age() {
    setAge(33)
  }

  let [add, setAdd] = useState(0)
  let count = 1;

  let [counter, setCounter] = useState(0)

  /*
  function lesscount() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
//   here   counter always +ve use everything inside condition
*/
  function increment() {
    setAdd(prev => prev + 1);

  }

  //  now using ternary operator, usestate 
  let [a, setA] = useState(false)

  return (
    <>


      <h1 className="text-5xl text-center font-semibold mt-4"> welcome : {counter} </h1>
      <button className="border-1 p-1" onClick={() => setCounter(counter + 1)}> start count</button>  &ensp; &ensp;

      <button  className="border-1 p-1" onClick={() => counter >5 && setCounter(counter-1) }> decrease count</button>
    
      {/*  increase counter  and logics only in button    */}


      <br /> <br />
      {a ? "" : <h1 className="text-4xl ml-4 "> Hide me </h1>}

      <button className="border p-3 rounded-2xl" onClick={() => setA(true)}> click here</button>
      <button className="border p-3 rounded-2xl" onClick={() => setA(false)}> click here</button>
      <button className="border p-3 rounded-2xl" onClick={() => setA(!a)}> Toggle here</button>


      {/*  hide  show  */}
      <button className="border p-3 rounded-2xl" onClick={() => setA(!a)}>
        {a ? "show" : "Hide"}
      </button>

      {/*  to change button name aslo use ternary inside button  */}
      {/*  now ternary and usestate */}


      < State />  <br /> <br />







      <h1>this is useState (camelCase) - {name} & age - {age} </h1>

      <button onClick={fun}> tap here </button>
      <button onClick={Age}>  chng age </button>
      <br />

      <h1> hello I am new useState my contact is - {contact} </h1>
      <br />
      <button onClick={() => setCon(93458211)}> chng contact</button>

      <br />

      <h1> hello I am increment decrement operator {add}</h1>
      <button onClick={increment}>+</button>
      <button onClick={() => setAdd(prev => prev - 1)}>-</button>

    </>
  )

}

export default App

// camel case  palPay 