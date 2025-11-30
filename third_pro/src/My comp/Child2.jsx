//  child 2 jsx in  third project

// now using destructuring >>  and  named export 


export function Child2 (props) { 
    let {contact, city} = props

    return ( 
        <> 
            <br />
            <h1 > hey I am Child2 my parent is app.jsx</h1> 

            <h2> my contact is _ {contact}</h2>
            <h2> my city is _ {city}</h2>
        </>
    )
}





