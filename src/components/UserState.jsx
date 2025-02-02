import React from 'react'
import { useState } from 'react'

const UserState = () => {
    const [user,setUser] = useState({
        name:"Alice",
        age:25,
        profession:"Developer",

    });
  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.profession}</p>
        <button onClick={()=>setUser({...user,age:user.age+1})}>
            Increase Age
        </button>
    </div>
  )
}

export default UserState

// use spread operator to keep other properties to prevent losing