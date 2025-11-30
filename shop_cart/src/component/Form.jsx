import React, { useState } from 'react'
import axios from 'axios'

function Form() {

  let [frmdata, setFrmdata] = useState({})

  function handleIp(e) {
    // console.log(e)
    let { name, value } = e.target
    setFrmdata({ ...frmdata, [name]: value })
  }

  function finalsubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/person', frmdata)
      .then(() => alert("data transfered.."))
      .catch((err) => alert(err))
  }

  return (
    <>

      <form action="" onSubmit={finalsubmit}>

        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={handleIp} />
        <br />

        <label htmlFor="">Email</label>
        <input type="text" name='email' onChange={handleIp} />
        <br />

        <label htmlFor="">Address</label>
        <input type="text" name='address' onChange={handleIp} />
        <br />

        <input type="submit" />

      </form>

    </>
  )
}

export default Form 

// when there is no  each item  no need to  use  function (e)  like this form 
