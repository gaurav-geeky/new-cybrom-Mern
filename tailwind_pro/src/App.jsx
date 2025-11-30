
import './App.css'

import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";



function App() {
  
  return (
    <>
      
      <section  className=' h-screen  bg-[url(task2pic.jpg)] bg-cover  p-15  '> 

        <h1 className=' text-3xl font-mono  '>alexa peterson</h1>
        <br /> <br /> <br /> 

        <h2 className=' text-7xl text-white  '> COMING APRIL 2023 </h2> 
        <br /> 

        <p className='text-xl text-white '> My Travel Blog is almost ready. Be one of the first to experience it by <br /> entering your email below. I'll notify you as soon as it's live. Let's do this! </p> 
        <br /> <br /> 

        <input type="text" placeholder='Enter Your First and Last Name' className='field-sizing-fixed w-120 border-1 border-white bg-white p-1 rounded-md m-1  ' />
        <br /> 

        <input type="text" placeholder='Enter your Email Address ' className='field-sizing-fixed w-80 border-1 border-white bg-white p-1 rounded-md  m-1  ' /> 

        <button className='field-sizing-content border-0 rounded-md p-1 px-2  text-white font-bold bg-orange-400  m-1  hover:bg-blue-500 '> SIGN ME UP! </button>
        <br /> <br /> 

        <div className=' text-white text-3xl flex ' > 
        < AiOutlineTwitter  className=' ' /> &ensp;  
        < AiFillInstagram className=' ' />  &ensp;  
        < BiLogoFacebookSquare className=' ' />
        </div> 

        <br /> <br /> <br /> <br />  
        <p className='  text-white '> &copy; 2023 Alexa Peterson. All Rights Reserved. </p>

        <img src="girl.png" alt="pic" className='absolute  right-59 bottom-0' />

        <h1 className='text-'>hello</h1>
      </section>

    </>
  )
}

export default App




 