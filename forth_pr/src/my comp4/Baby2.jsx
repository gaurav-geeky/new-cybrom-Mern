

import Baby3 from "./Baby3"
import Baby4 from "./Baby4"



function Baby2 ( {toy2}) { 
    return ( 
        <> 
        <h1> Hi I am baby 2 __child</h1> 

        < Baby3 toy3={toy2}/> 
        < Baby4 toy4={toy2} /> 
        </>
    )
} 

export default Baby2 

