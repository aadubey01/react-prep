import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    let {username } = useParams();
  return (
    <div> Welcome,{username}</div>
  )
}

export default Hello