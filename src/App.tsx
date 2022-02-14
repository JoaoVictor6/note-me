import style from './App.module.css'
import { useTheme } from './context/Theme.context'

function App() {
  const theme = useTheme()
  return (
    <div className={theme}>
      <h1 className={style.h1}>TESTE</h1>
    </div>
  )
}

export default App
