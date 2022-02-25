import React from 'react'
import { useTheme } from '@context/Theme.context'
import classes from './themeSwitch.module.css'
const svg = {
    "hybrid": () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9V2" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.21997 10.22L5.63997 11.64" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 18H3" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 18H23" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3601 11.64L19.7801 10.22" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 22H1" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 5L12 9L8 5" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
    , 
    "dark": () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 1V3" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21V23" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.22021 4.21997L5.64021 5.63997" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3599 18.36L19.7799 19.78" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 12H3" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12H23" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.22021 19.78L5.64021 18.36" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3599 5.63997L19.7799 4.21997" stroke="#A8A8B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "light": () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6518 13.7866 21 12.79Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}
export function ThemeSwitch() {
  const { theme, changeTheme } = useTheme()
  return (
    <button 
      onClick={() => changeTheme()}
      className={classes.themeSwitchBtn}
    >
      {svg[theme]()}
    </button>
  )
}
