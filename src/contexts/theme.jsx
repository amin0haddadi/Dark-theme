import { useContext, useState } from "react"
import { React } from "react"
import { createContext } from "react";

const ThemeContext = createContext(undefined)
const ThemeProvider=({children})=>{
    const [theme, setTheme]=useState({ mode: "LIGHT"})
const toggleThemeMode=()=>{
    setTheme(prevTheme => ({...prevTheme, mode: prevTheme.mode === "LIGHT" ? "DARK" : "LIGHT"}))
}
    return(
        <ThemeContext.Provider value={{toggleThemeMode, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = () => {
    const context = useContext(ThemeContext)
  
    if (context === undefined)
      throw new Error("useTheme must be within ThemeProvider!")
  
    return context
  }
export  {ThemeProvider,useTheme}