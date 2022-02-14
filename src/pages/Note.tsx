import React from 'react'
import classes from '@style/Pages/note.module.css'
import SidebarLogo from '../components/SidebarLogo'

export default function Note() {
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        <SidebarLogo />
        <menu className={classes.side__menu}>
          <button className={classes.menu__homeBtn}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 29.3333V16H20V29.3333" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button className={classes.menu__newItemBtn}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6.66663V25.3333" stroke="#3C3D43" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66666 16H25.3333" stroke="#3C3D43" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </menu>
        <button className={classes.side__logout}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M12 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12" stroke="#3C3D43" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.3333 22.6667L28 16L21.3333 9.33337" stroke="#3C3D43" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 16H12" stroke="#3C3D43" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </aside>
      Note
    </div>
  )
}
