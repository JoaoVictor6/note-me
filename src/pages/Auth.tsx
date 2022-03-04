import React, { useState } from 'react'
import classes from '@style/Pages/auth.module.css'
import manWorkingSVG from '@assets/home/man-working.svg'
import googleSVG from '@assets/logo/google.svg'
import logoSVG from '@assets/brand/logo-light.svg'
import { signInWithGoogle } from '../services/firebase/authProvide'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNavigate } from 'react-location'

export default function Auth() {
  const navigate = useNavigate()
  const [codeName, setCodeName] = useState("")
  const [_, setUserName] = useLocalStorage('@note-me/name')
  const googleButtonHandler = async () => {
    const user = await signInWithGoogle()
    if(!user)return

    setUserName(user)
    navigate({to: '/note', replace: true})
  }
  const codeNameButtonHandler = () => {
    setUserName(codeName)
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate({to: '/note', replace: true})
  }

  return (
    <div className={classes.container}>
      <header>
        <img src={manWorkingSVG} alt="man working illustration" />
        <section className={classes.header__text}>
          <h1>Keep life simple</h1>
          <h2>Store all your notes in a simple and intuitive app that helps you enjoy what is most important in life.</h2>
        </section>
      </header>
      <section className={classes.formSection}>
        <img src={logoSVG} alt="logo of note.me" />
        <form
          onSubmit={submitHandler}
        >
          <button
            type="button"
            className={classes.form__googleAuth}
            onClick={googleButtonHandler}
          >
            <img src={googleSVG} alt="google favicon" />
            Join with google
          </button>
          <span className={classes.form__divider}>or join anonymously</span>
          <input 
            type="text"
            className={classes.form__input}
            placeholder='Type your secret codename'
            value={codeName}
            onChange={e => setCodeName(e.target.value)}
          />
          <button
            onClick={codeNameButtonHandler}
            disabled={codeName === ""}
            className={classes.form__joinButton}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33331 14.1666L12.5 9.99998L8.33331 5.83331" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 10H2.5" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Join anonymously
          </button>
        </form>
      </section>
    </div>
  )
}
