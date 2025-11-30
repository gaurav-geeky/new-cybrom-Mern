import { Link } from "react-router-dom"

function Services () { 

    return (
        <>
        <div className=" flex flex-col justify-center items-center p-5"> 
        <h1 className=" text-3xl text-blue-700 font-bold text-center p-2 " > Available Services </h1>  

        <p className=" grid grid-cols-3  gap-15" > 

            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl " src="china.png" alt="pic" /> 
                <p> Lorem ipsum dolor sit amet. <Link className=" font-bold " to="/"> Home</Link> </p>
            </div> 
            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl " src="dubai.png" alt="pic" /> 
                <p> stock broking in dubai. <Link className=" font-bold " to="/about"> About </Link> </p>
            </div>            
            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl "  src="egypt.png" alt="pic" /> 
                <p> latest technology in egypt. <Link className=" font-bold " to="/contact"> Contact</Link> </p>
            </div>            
            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl "  src="london.png" alt="pic" /> 
                <p>  adipisicing elit. Labore, consequuntur!</p>
            </div> 
            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl " src="rome.jpeg" alt="pic" /> 
                <p> aspernatur neque aliquam corrupti tenetur!.</p>
            </div> 
            <div className=" h-110 w-99 bg-blue-200 rounded-2xl text-center " > 
                <img className=" h-99  rounded-2xl "  src="henley.jpeg" alt="pic" /> 
                <p> aspernatur neque aliquam corrupti tenetur!.</p>
            </div> 

        </p>

        </div>
        </>
    )
}

export default Services 