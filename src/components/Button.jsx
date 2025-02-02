import React from 'react'

const Button = ({handleButton}) => {
  return (
    <div><button onClick={handleButton}>Click it!</button></div>
  )
}

export default Button