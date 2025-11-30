import { createSlice } from "@reduxjs/toolkit"; 

let Cartslice = createSlice ({

    name: "cart", 
    
    initialState: {
        cartItem: [] 
    }, 

    reducers: {

        addItem: (state, action) => {
            let item = state.cartItem.find( (e)=> e.pid === action.payload.pid ) 
            if (item) {
                item.count ++;  // when 0 __ add to cart 
            } 
            else {
                state.cartItem.push({...action.payload, count: 1} ) // if x itm then cart+
            } 
            // state.cartItem.push( action.payload)
        } ,

        increaseQ: (state, action) => {
            let item = state.cartItem.find((e) => e.pid === action.payload); 
            if (item) {
                item.count++; 
            }
        } , 
        
        decreaseQ: (state, action) => {
            let item = state.cartItem.find( (x)=> x.pid == action.payload); 

            if (item && item.count >1 ) {
                item.count--; 
            }
            else if (item && item.count === 1) {
                state.cartItem = state.cartItem.filter((each)=> each.pid !== action.payload) 
                // item.count = 0; 
            }
        }, 

        deleteQ: (state, action) => {
                state.cartItem = state.cartItem.filter((each)=> each.pid !== action.payload)  
        } , 

    }
}) 

export const {addItem, increaseQ , decreaseQ} = Cartslice.actions 
export default Cartslice.reducer 

export const {deleteQ} = Cartslice.actions 

