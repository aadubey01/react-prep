import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const[theme,setTheme] = useState("Light")
  return (
    <ThemeContext.Provider value ={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

// the children prop will be used to take the consumer inside the provider....
