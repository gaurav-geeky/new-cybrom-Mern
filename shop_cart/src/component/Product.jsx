import React from 'react'
import m1 from "../assets/cloth/m1.png"
import m2 from "../assets/cloth/m2.png"
import m3 from "../assets/cloth/m3.png"

import { addItem, decreaseQ, deleteQ, increaseQ } from './Cartslice'
import { useDispatch, useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom';

function Product() { 

  let move = useNavigate(); 

  let productList = [
    { pid: 1, pname: "tshirt 1", pprice: 225.00, pimg: m1 },
    { pid: 2, pname: "tshirt 2", pprice: 300.00, pimg: m2 },
    { pid: 3, pname: "tshirt 3", pprice: 322.00, pimg: m3 }
  ]

  let dispatch = useDispatch()

  function handleCart(each) {
    dispatch(addItem(each))
  }; 

  let eachItem = useSelector((each) => each.cart.cartItem);


  let Total = () => {
    let totalp = 0;
    let totalq = 0;

    eachItem.forEach((each) => {
      totalp += each.count * each.pprice;
      totalq += each.count;
    });

    return { totalp, totalq };
  };
  let { totalp, totalq } = Total()



  return (
    <>
      <h1> here are our products .  &ensp; &ensp; cart no. {eachItem.length}  </h1>
      <section style={{ height: "600px", backgroundColor: "lightyellow", display: "flex", justifyContent: "space-around" }}>
        {
          productList.map((each) => (

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2%" }}>
              <img style={{ height: "150px" }} src={each.pimg} alt="pic" />

              <div>
                <h2> product name: {each.pname} </h2>
                <h2> product id : {each.pid} </h2>
                <h4> prodcut price : {each.pprice} </h4>

                <button onClick={() => handleCart(each)} > Add Cart</button>
              </div>

            </div>
          ))

        }
      </section>

      <br /> <br /> 
      <h1>showing products here <br /> </h1>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

        <section style={{ flexGrow: "3", border: "1px solid black", display: "grid", gridTemplateColumns: "auto auto" }}>
          {
            eachItem.map((item) => (

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <img style={{ height: "150px" }} src={item.pimg} alt="pic" />

                <div>
                  <h1> product name: {item.pname} </h1>
                  <h1> product id: {item.pid} </h1>
                  <h1> product name: Rs. {item.pprice} </h1>

                  <div>
                    <button onClick={() => dispatch(increaseQ(item.pid))}>++</button>
                    <p> {item.count}</p>
                    <button onClick={() => dispatch(decreaseQ(item.pid))}>--</button>

                  </div>

                  <p> total amount: {item.pprice * item.count}</p>

                  <button onClick={() => dispatch(deleteQ(item.pid))}> delete it </button>
                </div>

              </div>
            ))

          }
        </section  >

        <article style={{ flexGrow: "1", backgroundColor: "lightpink", width: "200px", }}>
          <p> total no of item purchased : {totalq} </p>
          <p> total amount : {totalp} </p>
          <button onClick={()=> move('/form')} > Buy now </button>
        </article>

      </section>
    </>
  )
}

export default Product
