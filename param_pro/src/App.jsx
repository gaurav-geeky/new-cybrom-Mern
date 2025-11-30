
import './App.css'
import Contact from './component/Contact'
import About from './component/About'
import { Link, Route, Routes } from 'react-router-dom'
import User from './component/User'


function App() {

  return (
    <>
      <h1> hello param in app jsx</h1>

      {/*  give static data by user / no.  / name */}

      <Link to='/user/1/qasim'> uzer-1</Link>
      <Link to='/user/2/rohit'> uzer-2</Link>
      <Link to='/user/3/ajay'> uzer-3</Link>

      <Routes>
        <Route path="/about/:id" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id/:name" element={<User />} />
        <Route path="/contact/:name" element={<Contact />} />


      </Routes>

    </>
  )
}

export default App
