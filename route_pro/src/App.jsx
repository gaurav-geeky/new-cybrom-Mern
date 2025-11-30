
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './my Comp route/Home'
import About from './my Comp route/About'
import Contact from './my Comp route/Contact'
import Services from './my Comp route/Services'

import Layout from './my Comp route/Layout'

function App() {

  return (
    < >
      <div >

        {/* <h1 > this is our app page </h1> */}

        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

          </Route>

        </Routes>

      </div>
    </>
  )
}

export default App    