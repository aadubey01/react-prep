import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UserList = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

        console.log("Fetching data..");

        fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
    },[]);

    
  return (
    <div>
    <h2>Users List</h2>
    <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
  </div>
  )
}

export default UserList