import React from 'react'
import { useState } from 'react'

const Forms = () => {
    const [inputVal,setInputVal] = useState("")

    const handleChange = (event)=>{
        setInputVal(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted Value",inputVal)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:<input type='text' value={inputVal} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </label>
    </form>
  )
}

export default Forms