import { Color } from './component/Color'
import State from './component/State'
import Form from './component/Form'

import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Layout } from './component/Layout'


function App() {

  return (
    <>

      <h1 > this is our App jsx page in trial1 task </h1>

{/*  for  fix header footer */}
      {/* <Routes>
            <Route path="/" element={ < Layout /> }>  
              
                <Route index element={ < State/>} />
                <Route path='/color' element={ < Color/>} />
                <Route path='/form' element={ < Form/>} />

            </Route>
      </Routes> */}


{/*  for normal routing     /abc     and go */}
      <Routes >

        <Route path="/" element={<State />} />
        <Route path="/color" element={<Color />} />
        <Route path="/form" element={<Form />} />

      </Routes>




    </>
  )
}

export default App 