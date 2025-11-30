//  it is local component ,  here we make function component with name   App. because working in app.jsx 
//  here we are to write js  and html  both in REACT  so it is   jsx.   javascript extensible mark up language.  
// her no use   `   ` for sometime. 


import Contact  from "./my components/Contact" 

import About from "./my components/About" 

import { Service1, Service2 } from "./my components/Service"
import Image from "./my components/Image" 
import Hero from "./my components/Hero" 


function App ( ) { 

  return ( 
    <> 
      {/* here inline  css */} 

      <h1 style = { { backgroundColor: "red",  color: "white"} }> welcome to the react class</h1>
      <Contact />
      <About/> 
      
      < Service1/> 
      <Service2/> 

      <Image/> 
      <Hero /> 
      
    </>

  )
} 

export default App 
