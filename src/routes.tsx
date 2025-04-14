import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieAddPage from "./pages/MovieAddPage";
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
          { index: true, element: <MoviesPage /> },     // Shows movie list/search
          { path: "add", element: <MovieAddPage /> },   // Add new movie
          { path: ":id", element: <MoviePage /> },      // Individual movie page
        ],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
