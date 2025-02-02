import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate();

    const handleLogin =()=>{
        Navigate('/hello/:username')

    }


  return (
    <button onClick={handleLogin}>Login</button>
  )
}

export default Login

// Use useNavigate hook to navigate inside event handlers/
