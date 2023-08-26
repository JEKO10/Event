import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import routes from "./routes";

function RouterProvider() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          {routes.map(({ id, path, element: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
      </>
    </Router>
  );
}

export default RouterProvider;
