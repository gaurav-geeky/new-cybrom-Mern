

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Layout from './Pages/Layout';


function App() {

  return (
    <>


      <Routes>
        <Route path='/' element={<Layout />}  >

          <Route index element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}

        </Route>
      </Routes>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />}  >

        </Route>
      </Routes>








    </>
  )
}

export default App;
