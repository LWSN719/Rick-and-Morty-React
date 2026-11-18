
import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "characters",
        element: <CharactersPage />,
      },
      {
        path: "characters/:id",
        element: <CharacterDetailsPage />,
      },
    ],
  },
]);

export default router;
