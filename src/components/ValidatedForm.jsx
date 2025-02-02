import React from 'react'
import { useState } from 'react'

const ValidatedForm = () => {

    const[email,setEmail] = useState("");
    const[error,setError] = useState("");

    const handleChange=(e)=>{
        setEmail(e.target.value);
        if(!e.target.value.includes('@')){
            setError("Invalid email address!")
        }else{
            setError("");
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(error){
            alert("Please fix the errors before submitting.")
        }else{
            alert("Form submitted!")
        }

    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type='email' value={email} onChange={handleChange}/>
            
           
        </label>
        <div style={{color:'red'}}>{error}</div>
        <button type='submit'>Submit</button>


    </form>
  )
}

export default ValidatedForm