import React, { createContext } from 'react'

const ThemeContext = createContext();

export default ThemeContext


// Context api is used when components need same type of data in different levels thus giving rise to the problem of prop drilling- passing props through many components just to reach a deeply nested child.

//Context Api is used it has 3 parts :Context 
//Provider
//Consumer