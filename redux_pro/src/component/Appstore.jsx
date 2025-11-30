
import { configureStore } from "@reduxjs/toolkit"; 
import CartSlicereducer from './CartSlice' //  imp reducer of slice

let Appstore = configureStore( {
    reducer: {
        cart: CartSlicereducer
    }
} )

export default Appstore  


//  it imported in main jsx to  carry through  Provider(imp it.)  
