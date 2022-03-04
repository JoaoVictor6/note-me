import { useLocalStorage } from "@hooks/useLocalStorage"
import { ThemeProps, Themes } from "@userTypes/contextTypes"
import { ReactNode, createContext, useContext } from "react"

type Props = {
  children: ReactNode
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