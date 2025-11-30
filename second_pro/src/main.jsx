import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Service1, Service2 } from "./my components/Service"




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    inside main jsx s1   < Service1 />

    inside main jsx  s2 <Service2 />


  </StrictMode>,
)
