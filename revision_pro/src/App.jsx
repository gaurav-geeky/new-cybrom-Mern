import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculate from './component/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculate/> 
    </>
  )
}

export default App
