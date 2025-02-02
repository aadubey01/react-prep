//Props(stand for'properties')
//they are used to manage the data and to pass on the data from parent component to child component.
//they are read-only , we cant modify them using child component
//Passing props

import React from 'react'

const Greetings = (props) => {
  return (
    <div><h1>I am {props.name} </h1>
    <h2> I am Passing Multiple values::   {props.designation} and {props.relation}</h2></div>
  )
}

export default Greetings

