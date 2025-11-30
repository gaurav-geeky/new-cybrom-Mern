import { RiReactjsLine } from "react-icons/ri";
import { Link } from "react-router-dom"
 

function Contact() {

    return (
        <>
            
            <div className=" w-full h-163 bg-[url(formbg.jpg)] bg-cover relative  " >

                <div className="  bg-pink-200 border-2 border-blue-400 w-2xl absolute m-4 " >

                    <h1 className="  text-xl text-red-500 text-center font-bold m-2  " > This is our Contact Form react here </h1>

                    <div className="  flex justify-evenly items-center">

                        <form className=" m-2 " action="">
                            Name <input type="text" className=" border-1 border-black m-1 p-1 " />
                            <br />
                            Mobile <input type="Number" className=" border-1 border-black m-1 p-1  " />
                            <br />
                            Age <input type="Number" className=" border-1 border-black  m-1 p-1  " />
                            <br />
                            Address <input type="text" className=" border-1 border-black m-1 p-1  " />
                            <br />
                            <button className=" p-1 pl-3 pr-3  rounded-2xl border-1 border-blue-400 bg-blue-400  "> Submit</button>
                        </form>

                        <p className=" text-[9em] text-blue-300 bg-black "> < RiReactjsLine /> </p>
                    </div>

                </div> 

                <div className=" text-white absolute bottom-5 left-5 ">
                    <Link className=" font-bold " to="/"> Home</Link> &emsp; 
                    <Link className=" font-bold " to="/about"> About </Link> &emsp; 
                    <Link className=" font-bold " to="/services"> Services</Link>  
                </div>

               

            </div>

        </>
    )
}

export default Contact 