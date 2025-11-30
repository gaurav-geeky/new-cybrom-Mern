
import { useNavigate } from 'react-router-dom'
import im1 from '../assets/tsh1.png' // import image like this 
import im2 from '../assets/tsh2.png' // import img  
import im3 from '../assets/tsh3.png' // import img

import { additem } from './CartSlice'  // imp action (add item) of slice
import { useDispatch, useSelector } from 'react-redux'


function Product() {

    let dispatch = useDispatch()
    let navigator = useNavigate()

    let cart = useSelector((store) => store.cart.cartitems)

    let productList = [
        {
            id: 1, pname: "watch", price: 2000, pimg: im1
        },
        {
            id: 2, pname: "laptop", price: 52000, pimg: im2
        },
        {
            id: 3, pname: "mobile", price: 22000, pimg: im3
        },

    ]

    function handleSubmit(e) {
        dispatch(additem(e))
    }

    
    return (
        <>
            <h1> cart - {cart.length} </h1> <br />

            <button onClick={() => navigator('./showcart')} >Goto Cart page</button>


            <div>
                <div style={{ display: "flex", justifyContent: "space-around" }} >
                    {
                        productList.map((e) => (
                            <div style={{ padding: "2px", }} > 

                                <img style={{ width: "180px", height: "auto" }} src={e.pimg} alt="pic" />

                                <h1> {e.pname} </h1>

                                <h1> {e.price} </h1>

                                <button style={{ width: "100px", height: "30px" }} onClick={() => handleSubmit(e)}> Add to cart </button> <br /> <br /> 
                                {/* item Add th. click */}

                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Product
