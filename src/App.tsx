import { NotesProvider } from "@context/Notes.context";
import {
  DefaultGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from "react-location";
import { useTheme } from "./context/Theme.context";
import Auth from "./pages/Auth";
import Note from "./pages/Note";

const routes: Route<DefaultGenerics>[] = [
  {
    path: "/", element: <Auth />
  },
  {
    path: "/note", element: (
      <NotesProvider>
        <Note />
      </NotesProvider>
    )
  }
]

const location = new ReactLocation();

function App() {
  const { theme } = useTheme()
  return (
    <Router
      location={location}
      routes={routes}
    >
      <div className={theme}>
        <Outlet />
      </div>
    </Router>
  )
}

export default App
