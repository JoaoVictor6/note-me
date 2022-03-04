export type ContextProps = {
  notes: NotesProps[]
  removeNote: (id: number) => void
  editNote: (id: number, text: string) => void
  addNote: () => void
}

export type ColorClass = 'opaqueLightYellow'| 'opaqueRedOrange' | 'opaqueLilac' | 'opaqueGreenCyan' | 'opaqueLightCyan'

export type NotesProps = {
  timestamp: string
  text: string
  colorClass: ColorClass
}

export type Themes = 'dark' | 'light' | 'hybrid'
export type ThemeProps = {
  currentTheme: Themes
  setCurrentTheme: (value: Themes) => void
}