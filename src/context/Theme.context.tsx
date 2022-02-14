import { ReactNode, createContext, useContext } from "react"

type Props = {
  children: ReactNode
}

const Theme = createContext<'dark' | 'light'>('light')

export const ThemeProvider = ({children}: Props) => {
  return (
    <Theme.Provider value="light">
      {children}
    </Theme.Provider> 
  )
}

export const useTheme = () => {
  const theme = useContext(Theme)

  return theme
}