
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signform from './component/Sign'
import Login from './component/Login'

function App() {

  return (
    <>
      <h1> app jsx component in  sign_login project </h1>

      <Routes>
        <Route path='/sign' element={< Signform/>} />  
        <Route path='/login' element={< Login/>} />  
      </Routes>
    </>
  )
}

export default App
