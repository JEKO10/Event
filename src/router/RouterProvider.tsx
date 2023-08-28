import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import routes from "./routes";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

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
      <Socials />
      <Footer />
    </Router>
  );
}

export default RouterProvider;
