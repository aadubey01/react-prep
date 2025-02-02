import React ,{useRef} from 'react'

//UNcontrolled relies on DOM rather than on react for managing inputs
const UncontrolledForms = () => {
    const inputRef = useRef();

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Input Value:" + inputRef.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:<input type='text' ref={inputRef}/>

        </label>
        <button type='submit'>Submit</button>

    </form>

  )
}

export default UncontrolledForms