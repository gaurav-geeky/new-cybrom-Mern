import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    let {id, name} = useParams() 
  return (
    <div>

        <h1> this is our user - {id} , name: {name} </h1>
      
    </div>
  )
}

export default User
