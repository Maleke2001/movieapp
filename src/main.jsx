
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
import Avengers from "./pages/Avengers";

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
},
{ path:"/movie/:id",
  element :(<Avengers/>) }, 

{ path:"/serie/:id",
 element :(<Avengers/>) },
  
 { path:"/edit/:id",
  element :(<Adding/>) },




]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);