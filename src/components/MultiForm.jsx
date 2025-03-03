import React from 'react'
import { useState } from 'react'

const MultiForm = () => {
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData((prevData)=>({...prevData,[name]:value ,}))
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Data:",formData);
    };
  return (
   <form onSubmit={handleSubmit}>

    <label>
        Username:
        <input type='text' name='username' value={formData.username} onChange={handleChange}/>
    </label>
    <label>
        Email:
        <input type='email' name='email' value={formData.email} onChange={handleChange}/>
    </label>
    <label>
        Password:
        <input type='password' name='password' value={formData.password} onChange={handleChange}/>
    </label>
    <button type='submit'>Submit</button>

   </form>
  )
}

export default MultiForm