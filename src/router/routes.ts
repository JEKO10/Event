import Home from "../pages/Home";
import SinglePage from "../pages/SinglePage";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "stranica/:path",
    element: SinglePage,
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
