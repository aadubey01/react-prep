import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to={'/'}>Greetings</Link>
        <Link to={'/counter'}>Counter</Link>
        <Link to={'/forms'}>Forms</Link>
        <Link to={'/hello/:username'}>Hello</Link>
        <Link to={'/login'}>Login</Link>
        
    </nav>
  )
}

export default NavBar