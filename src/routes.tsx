import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "movies",
        children: [
          { index: true, element: <HomePage /> },
          { path: ":id", element: <MoviePage /> },
        ],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
