import Home from "../pages/Home";
import SingleNew from "../pages/SingleNew";
import SinglePage from "../pages/SinglePage";
import SingleWork from "../pages/SingleWork";
import Topics from "../pages/Topics";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  { id: 1, path: "/teme-i-raspored", element: Topics },
  {
    id: 2,
    path: "info/:path",
    element: SinglePage,
  },
  {
    id: 3,
    path: "radovi/:path",
    element: SingleWork,
  },
  {
    id: 4,
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
