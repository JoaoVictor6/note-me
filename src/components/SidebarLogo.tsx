import React from 'react'
import { useTheme } from '../context/Theme.context'

export function SidebarLogo() {
  const theme = useTheme() 
  if(theme === "dark") return(
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 40H42" stroke="#FDBAA3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 6.99996C33.7956 6.20432 34.8748 5.75732 36 5.75732C36.5572 5.75732 37.1088 5.86706 37.6236 6.08028C38.1383 6.29349 38.606 6.606 39 6.99996C39.394 7.39393 39.7065 7.86164 39.9197 8.37638C40.1329 8.89112 40.2426 9.44281 40.2426 9.99996C40.2426 10.5571 40.1329 11.1088 39.9197 11.6236C39.7065 12.1383 39.394 12.606 39 13L14 38L6 40L8 32L33 6.99996Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 40H42" stroke="#FDBAA3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 6.99996C33.7956 6.20432 34.8748 5.75732 36 5.75732C36.5572 5.75732 37.1088 5.86706 37.6236 6.08028C38.1383 6.29349 38.606 6.606 39 6.99996C39.394 7.39393 39.7065 7.86164 39.9197 8.37638C40.1329 8.89112 40.2426 9.44281 40.2426 9.99996C40.2426 10.5571 40.1329 11.1088 39.9197 11.6236C39.7065 12.1383 39.394 12.606 39 13L14 38L6 40L8 32L33 6.99996Z" stroke="#3C3D43" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
