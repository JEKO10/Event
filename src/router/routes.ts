import Home from "../pages/Home";
import SingleNewPage from "../pages/SingleNewPage";

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "/:path",
    element: SingleNewPage,
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
