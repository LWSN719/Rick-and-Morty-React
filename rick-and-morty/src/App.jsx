
import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/characters">Characters</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
