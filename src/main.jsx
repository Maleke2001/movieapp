
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import "./index.css"

import Moviespage from "./pages/Moviespage";
import Seriespage from "./pages/Seriespage";
import Adding from "./pages/Adding";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/movie-page",
    element: (
      <Moviespage/>
    ),
  },

  {
    path: "/series",
    element: (
      <Seriespage/>
    ),
  },
{
  path:"/addpage",
  element :(<Adding/>)
},

{path:'/movies-page,',
  element:(<Moviespage/>)
}




]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);