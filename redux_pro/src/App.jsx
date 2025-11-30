import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Product from './component/Product.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Showcart from './component/Showcart.jsx'


function App() {

  return (
    <>
      <h1> this is app jsx componenet in REdux </h1>

      {/* <Product /> */}

      <Routes >
        <Route index element={<Product />} />
        <Route path='/showcart' element={<Showcart />} />
      </Routes>

    </>
  )
}

export default App
