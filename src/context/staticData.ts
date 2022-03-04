import { ColorClass, NotesProps } from "@userTypes/contextTypes"

export const colors: ColorClass[] = ['opaqueLightYellow', 'opaqueRedOrange' , 'opaqueLilac' , 'opaqueGreenCyan' , 'opaqueLightCyan']

export const initialProps:NotesProps[] = [
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