import { useRef, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ref from './component/Ref';


function App() {

  let myRef = useRef() 
  let fRef = useRef() 

  function inputfocus() {
    fRef.current.focus() 
    
  }

  function change() { 
    myRef.current.innerHTML = "this is useRef hook to manipulate DOM "
    myRef.current.style.background = "red" 
  }

  function toastHandler() {
    toast.success("successful ...! ")
  }
  return (
    <>
      <h1> app jsx in reference </h1> <br /> 

      <Ref/> 
      <br /> <hr /> 
      
      <input type="text" ref={fRef} />
      <button onClick={inputfocus}> tap here </button>

      <Ref/> 

      <ToastContainer position="top-center" theme="dark" transition="Bounce" />

      <button onClick={toastHandler}>toast it </button>
      <br />
      <hr />
      <br />


      <br />
      <hr />
      <br />

      <h1  ref={myRef}>welcome</h1>
      <button onClick={change} > change wel</button>
    </>
  )
}

export default App


