import { useNotes } from '@context/Notes.context'
import React from 'react'
import classes from './menu.module.css'

export function Menu() {
  const { addNote } = useNotes()
  return (
    <menu className={classes.menu}>
      <button className={classes.menu__homeBtn}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 29.3333V16H20V29.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        className={classes.menu__newItemBtn}
        onClick={() => addNote()}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6.66663V25.3333" stroke="#3C3D43" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.66666 16H25.3333" stroke="#3C3D43" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </menu>
  )
}
