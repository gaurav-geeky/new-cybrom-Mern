import { useState } from 'react'
import './App.css'
import Product from './component/Product'
import { Route, Routes } from 'react-router-dom'
import Form from './component/Form'


function App() {
  
  return (
    <>
    {/* <Product/>  */}

    <Routes>
      <Route index element={ <Product/> }/> 
      <Route path="/form" element={ <Form/> }/> 
    </Routes>
      
    </>
  )
}
export default App


