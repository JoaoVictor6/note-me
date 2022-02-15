import React, { useEffect } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { SidebarLogo } from '@components/SidebarLogo'
import { useNavigate } from 'react-location'
import { Menu } from '@components/Menu'
import { Nav } from '@components/Nav'
import { Notes } from '@components/Notes'
import classes from '@style/Pages/note.module.css' 
import { ThemeSwitch } from '@components/ThemeSwitch'

export default function Note() {
  const navigate = useNavigate()
  const [userName, setUserName] = useLocalStorage('@note-me/name')
  useEffect(() => {
    if(userName === "")navigate({to: '/', replace: true})
  }, [userName])
  
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        <SidebarLogo />
        <Menu />
        <button
          onClick={() => {
            setUserName('')
          }}
          className={classes.side__logout}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path d="M12 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12" stroke="#3C3D43" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 22.6667L28 16L21.3333 9.33337" stroke="#3C3D43" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 16H12" stroke="#3C3D43" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        </button>
      </aside>
      <main className={classes.main}>
        <Nav 
          gadgets={<ThemeSwitch />}
        />
        <header className={classes.main__header}>
          <h1>Hello, <p>{userName}</p>! 👋🏼</h1>
          <h2>All your notes are here, in one place!</h2>
        </header>
        <Notes />
      </main>
    </div>
  )
}
