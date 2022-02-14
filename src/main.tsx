import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
import { ThemeProvider } from './context/Theme.context'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
