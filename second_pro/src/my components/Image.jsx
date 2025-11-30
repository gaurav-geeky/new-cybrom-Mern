import myImg from '../assets/react.svg'  
{ /* come out from current folder   and use another folder to apply image use import method */}

function Image () { 
    return (
        <>  
            { /* if image comes from public folder no need any path just name img vite.svg */}
            
            <img src="vite.svg" alt="" /> <br/> 
            <img src="comment.png" />  

            {/* if image comes from  src _ asset folder so  have to import it */}
            <div> 
                <img src={myImg} alt=""/>
            </div>
        </>
    )
} 

export default Image 








