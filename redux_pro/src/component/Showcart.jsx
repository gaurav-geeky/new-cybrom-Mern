

import { useSelector } from "react-redux";

const Showcart = () => {

    let cart = useSelector((store) => store.cart.cartitems)

    return (
        <>
            <h1> All cart items </h1>
            <div style={{ display: "flex", justifyContent: "space-around"}}>
                { cart.map((itm) => (
                    <div>
                        <img style={{ height: "200px"}} src={itm.pimg} alt="pic" />
                        <h1> {itm.pname} </h1>
                        <h1> {itm.price} </h1>
                    </div>

                )) } 
            </div>
        </>
    )
}

export default Showcart 