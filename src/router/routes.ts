import Home from "../pages/Home";
import SingleNew from "../pages/SingleNew";
import SinglePage from "../pages/SinglePage";
import SingleWork from "../pages/SingleWork";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "info/:path",
    element: SinglePage,
  },
  {
    id: 2,
    path: "radovi/:path",
    element: SingleWork,
  },
  {
    id: 3,
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
