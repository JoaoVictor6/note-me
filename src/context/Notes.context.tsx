import { useLocalStorage } from "@hooks/useLocalStorage"
import { ReactNode, createContext, useContext, useState } from "react"

type Props = {
  children: ReactNode
}
type ContextProps = {
  notes: NotesProps[]
  removeNote: (id: number) => void
  editNote: (id: number, text: string) => void
  addNote: () => void
}
type ColorClass = 'opaqueLightYellow'| 'opaqueRedOrange' | 'opaqueLilac' | 'opaqueGreenCyan' | 'opaqueLightCyan'
type NotesProps = {
  timestamp: string
  text: string
  colorClass: ColorClass
}

const colors: ColorClass[] = ['opaqueLightYellow', 'opaqueRedOrange' , 'opaqueLilac' , 'opaqueGreenCyan' , 'opaqueLightCyan']

const initialProps:NotesProps[] = [
  {
    text: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
    timestamp: (new Date()).toISOString(),
    colorClass: 'opaqueLightYellow'
  },
  {
    text: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
    timestamp: (new Date()).toISOString(),
    colorClass: 'opaqueGreenCyan'
  },
  {
    text: 'Type your note...',
    timestamp: (new Date()).toISOString(),
    colorClass: 'opaqueLilac'
  }
]

const randomColor = (list: string[]) => {
  const index = Math.floor(Math.random() * list.length)

  return list[index] 
}

const NotesContext = createContext({} as ContextProps) 

export const NotesProvider = ({children}: Props) => {
  const [notes, setNotes] = useLocalStorage<NotesProps[]>('@note-me/notes', initialProps)
  const removeNote = (id: number) => {
    const edited = notes.filter((_, index) => index !== id)
    setNotes(edited)
  }
  const editNote = (id: number, text: string) => {
    const edited = notes.map((item, index) => {
      if(index === id){
        return {
          colorClass:item.colorClass,
          timestamp: (new Date()).toISOString(),
          text
        }
      }
      return item
    })

    setNotes(edited)
  }
  const addNote = () => {
    setNotes([...notes, {
      colorClass: randomColor(colors) as ColorClass,
      text: 'Type your note...',
      timestamp: (new Date()).toISOString()
    }])
  }
  return (
    <NotesContext.Provider value={{notes, removeNote, editNote, addNote}}>
      {children}
    </NotesContext.Provider> 
  )
}

export const useNotes = () => {
  const context = useContext(NotesContext)
  
  return context
}