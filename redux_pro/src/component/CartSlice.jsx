
import {createSlice } from "@reduxjs/toolkit"

let CartSlice = createSlice ({
    
    name: "cart", 

    initialState: {
        cartitems: []
    }, 

    reducers: {
        additem: (state, action) => {
            state.cartitems.push(action.payload)
        } 
    }
})    

export const {additem} = CartSlice.actions 
export default CartSlice.reducer 

  
//  cart slice export 2 things

//     action, in product(data area)  &  

//  reducer( in store area). 


// reducer is function in which action is add Item. 
//   th action   func  reducer   is  running    which     add data in BucketItem (array) 
// data comes from product  
//  jo  data   product   se     aaye  actin k through  wo  PAYLOAD hoga. 
//  payload:  necessary item carried to somewhere, or data. 



