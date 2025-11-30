import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
    let {name} = useParams() 
  return (
    <>
      <h1>Contact page my name is - {name} </h1>
    </>
  )
}

export default Contact

