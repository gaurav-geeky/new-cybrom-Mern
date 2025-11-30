
import Api from './comp api/Api'
import Form from './comp api/Form' 
import {  Route, Routes, } from 'react-router-dom'
 

function App() {

  return (
    <>
      
      <h1> Welcome App jsx</h1>
      {/* < Api />   */}

      <Routes>
        <Route index  element={< Form/>} />
        <Route path='/api'  element={<Api/>}  />
      </Routes>
      
    </>
  )
}

export default App
