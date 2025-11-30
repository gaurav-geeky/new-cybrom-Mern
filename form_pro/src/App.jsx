// import Form from "./my comp/Form"; //  single form 

// import Multiform from "./my comp/Multiform";   // multi form 

import './App.css'
import { Route, Routes } from "react-router-dom"; 

// import { LocalStorage } from "./my comp/LocalStorage"; 

import LocalForm from "./my comp/Localform";   //  for use navigator 
import LocalShow from "./my comp/LocalShow";


function App() {

  return (
    <>
      {/* <LocalStorage />

      <br />

      <h1> this si app jsx content</h1>
      <br /> <br />
      <h1> here is form with individual useStates  &ensp; variable form </h1>
      < Form />

      <br /> <br /> <br />
      <h1> here is form with single useState in object form  </h1>
      < Multiform /> */}

      <br />  <br /> 
          <Routes>
            <Route index element={<LocalForm/>}/>
            <Route path="/localshow" element={<LocalShow/>}/>
          </Routes>

    </>
  )
}

export default App

