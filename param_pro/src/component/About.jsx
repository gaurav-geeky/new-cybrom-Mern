import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    let {id} = useParams() 

  return (
    <div>
      <h1> this is about page with id : {id} </h1> 
    </div>
  )
}

export default About




