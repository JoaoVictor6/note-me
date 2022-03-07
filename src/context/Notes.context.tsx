import { useLocalStorage } from "@hooks/useLocalStorage"
import { ColorClass, ContextProps, NotesProps } from "@interfaces/context/notes"
import { randomColor } from "@utils/randomPosition"
import { ReactNode, createContext, useContext, useState } from "react"
import { colors, initialProps } from "./staticData"

type Props = {
  children: ReactNode
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