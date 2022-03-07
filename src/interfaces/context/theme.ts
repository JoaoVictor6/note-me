export type Themes = 'dark' | 'light' | 'hybrid'
export type ThemeProps = {
  currentTheme: Themes
  setCurrentTheme: (value: Themes) => void
}