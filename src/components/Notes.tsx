import { useNotes } from '@context/Notes.context'
import React, { useState } from 'react'
import { dateSanitize } from '@utils/dataSanitizer';
import classes from './Notes.module.css'

export function Notes() {
  const { notes, removeNote, editNote } = useNotes()
  const [dragging, setDragging] = useState(false)

  const dragSwitch = (e: React.DragEvent<HTMLDivElement>, add: string, remove: string) => {
    e.currentTarget.classList.add(add)
    e.currentTarget.classList.remove(remove)
  }

  return (
    <>
      <section className={classes.notesContainer}>
        {notes.map((item, id) => (
          <div
            className={classes[item.colorClass]}
            key={id+'__'}
            id={id+''}
            draggable
            onDragStart={e => {
              dragSwitch(e, 'dragStyle', classes[item.colorClass])
              e.dataTransfer.setData("text", e.currentTarget.id);
              setDragging(true)
            }}
            onDragEnd={e => {
              dragSwitch(e, classes[item.colorClass], 'dragStyle')
              e.currentTarget.classList.remove('dragStyle')
              e.currentTarget.classList.add(classes[item.colorClass])
              setDragging(false)
            }}
          >
            <textarea 
              spellCheck={false}
              defaultValue={item.text}
              className={classes.cardBody}
              onChange={e => editNote(id, e.target.value)}
            />
            <div className={classes.cardFooter}>
              {dateSanitize(item.timestamp)}
            </div>  
          </div>
        ))}
      </section>
      {dragging && (
        <section 
          onDrop={e => {
            const data = e.dataTransfer.getData("text");
            setDragging(false)
            removeNote(Number(data))
          }}
          onDragOver={e => e.preventDefault()}
          className={classes.trashSection}
        >  
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.625 11.25H9.375H39.375" stroke="#F7685C" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 11.25V7.5C15 6.50544 15.3951 5.55161 16.0984 4.84835C16.8016 4.14509 17.7554 3.75 18.75 3.75H26.25C27.2446 3.75 28.1984 4.14509 28.9016 4.84835C29.6049 5.55161 30 6.50544 30 7.5V11.25M35.625 11.25V37.5C35.625 38.4946 35.2299 39.4484 34.5266 40.1516C33.8234 40.8549 32.8696 41.25 31.875 41.25H13.125C12.1304 41.25 11.1766 40.8549 10.4733 40.1516C9.77009 39.4484 9.375 38.4946 9.375 37.5V11.25H35.625Z" stroke="#F7685C" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.75 20.625V31.875" stroke="#F7685C" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.25 20.625V31.875" stroke="#F7685C" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Drag to Delete Note
        </section>
      )}
    </>
  )
}
