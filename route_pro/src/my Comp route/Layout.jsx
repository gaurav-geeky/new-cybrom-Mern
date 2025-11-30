
import { Link, Outlet } from "react-router-dom"
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoGooglePlus, BiLogoLinkedin } from "react-icons/bi";


function Layout() {

    return (
        <>

            <nav className=" flex  items-center  bg-blue-500  border-b-1 border-white  p-2   " >
                <p className="ml-5  text-6xl  font-bold " > Stock Broker  </p>  &ensp;  &ensp;
                <Link className=" text-xl " to="/">  Home</Link> &ensp; &ensp;
                <Link className=" text-xl " to="/about">  About</Link>  &ensp;  &ensp;
                <Link className=" text-xl " to="/contact">  Contact</Link>  &ensp;  &ensp;
                <Link className=" text-xl " to="/services">  Services </Link>
            </nav>

            <Outlet />

            <footer className=" flex justify-evenly items-center  bg-black text-white ">

                <img className=" h-18 ml-8 mt-2" src="logo.png" alt="money" />

                <div className="  flex flex-col items-start justify-center ml-10  ">
                    <h1> Contact us: +81 403-234-6711</h1>
                    <h1> &copy;Copyright. All rights reserved. </h1>
                    <h1> Registered Office: 16 Chaple Lane Old Sodbury, Bristol, United Kingdom, BS37 6NG. </h1>
                </div>

                <div className="  flex  items-center justify-around gap-x-20 text-4xl ">
                    < BiLogoFacebookCircle /> 
                    < BiLogoTwitter />  
                    < BiLogoGooglePlus />  
                    < BiLogoLinkedin /> 
                </div> 

            </footer>

        </>
    )

}

export default Layout
