import Home from "../pages/Home";
import SingleNew from "../pages/SingleNew";
import SinglePage from "../pages/SinglePage";
import SingleWork from "../pages/SingleWork";
import Topics from "../pages/Topics";
import Goal from "../pages/Goal";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  { id: 1, path: "/teme-i-raspored", element: Topics },
  { id: 2, path: "/cilj-konferencije", element: Goal },
  {
    id: 7,
    path: "info/:path",
    element: SinglePage,
  },
  {
    id: 8,
    path: "radovi/:path",
    element: SingleWork,
  },
  {
    id: 9,
    path: "vijesti/:path",
    element: SingleNew,
  },
  //   {
  //     id: 12,
  //     path: "/*",
  //     element: Error,
  //   },
  //   {
  //     id: 13,
  //     path: "/*",
  //     element: ScrollToTop,
  //   },
];

export default routes;
