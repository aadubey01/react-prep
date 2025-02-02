import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div style={{background:theme === 'light' ?"#fff":"#333",color:theme ==="light"?"#000":"#fff"}}>
        <p>The theme is {theme}</p>
        <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>toggle theme</button>
    </div>
  )
}

export default ThemedComponent