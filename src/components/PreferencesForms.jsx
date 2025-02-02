import React ,{useState} from 'react'


const PreferencesForms = () => {
    const[color,setColor] = useState("red");
    const[gender,setGender ]= useState("")
  return (
    <form>
        <label>
            Favorite Color:
            <select value={color} onChange={(e)=>setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </label>
        <br></br>
        <label>
            Gender:
            <input type='radio' value="Male" checked={gender=== "Male"} onChange={(e)=>setGender(e.target.value)}/> Male
            <input type='radio' value="Female" checked={gender=== "Female"} onChange={(e)=>setGender(e.target.value)}/> Female
        </label>
        <br></br>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default PreferencesForms