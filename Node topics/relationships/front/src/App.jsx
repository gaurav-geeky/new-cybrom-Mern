import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

// one to one
import Formone from './One/Formone'
import DisplayOne from './One/DisplayOne'

// many to one to many; 
import FormMany from './Many/FormMany'
import Displaymany from './Many/Displaymany'
import DisplayBooks from './Many/DisplayBooks'


function App() {

  return (
    <>

      {/* Navbar / Menu */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/one"> FormOne</Link>
        <Link to="/display">Display</Link>
        &emsp; &emsp;

        <Link to="/many">FormMany</Link>
        <Link to="/displaymany">Display 1</Link>
        <Link to="/displaybooks">Display 2</Link>
      </nav>


      {/* Routing */}
      <Routes>
        <Route path="/one" element={<Formone />} />
        <Route path="/display" element={<DisplayOne />} />
        <Route path="/many" element={<FormMany />} />
        <Route path="/displaymany" element={<Displaymany />} />
        <Route path="/displaybooks" element={<DisplayBooks />} />
      </Routes>

    </>
  )
}

export default App; 
