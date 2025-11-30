
import Baby2 from "./Baby2"


function Baby1 ( {toy1}) { 
    return ( 
        <> 
        <h1> Hiii I am baby 1 __child & import baby1 in appjsx in it attribut toy1= {toy1} </h1> 

        <Baby2 toy2={toy1} />

        </>
    )
} 

export default Baby1 

