import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollTop";
import Socials from "../components/Socials";

function RouterProvider() {
  return (
    <Router>
      <>
        <ScrollToTop />
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
