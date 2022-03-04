import { useLocalStorage } from "@hooks/useLocalStorage"
import { ReactNode, createContext, useContext, useState } from "react"

type Props = {
  children: ReactNode
}
type Themes = 'dark' | 'light' | 'hybrid'
type ThemeProps = {
  currentTheme: Themes
  setCurrentTheme: (value: Themes) => void
}
const Theme = createContext({} as ThemeProps)

export const ThemeProvider = ({children}: Props) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<Themes>('@note-me/theme', 'light')

  return (
    <Theme.Provider value={{currentTheme, setCurrentTheme}}>
      {children}
    </Theme.Provider> 
  )
}

export const useTheme = () => {
  const {currentTheme, setCurrentTheme} = useContext(Theme) 
  function changeTheme(){
    if(currentTheme === 'dark'){
      setCurrentTheme('hybrid')
      return 
    }
    if(currentTheme === 'hybrid'){
      setCurrentTheme('light')
      return
    }
    if(currentTheme === 'light'){
      setCurrentTheme('dark')
      return
    }
  }
  return { theme: currentTheme, changeTheme }
}