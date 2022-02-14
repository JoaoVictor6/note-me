import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from "react-location";
import Auth from "./pages/Auth";

const routes = [
  {
    path: "/", element: <Auth />
  }
]

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={routes}
    >
      <Outlet />
    </Router>
  )
}

export default App
