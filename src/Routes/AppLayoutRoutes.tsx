import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const AppLayoutRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/news",
    element: <h2>News page</h2>,
  },
  {
    path: "/cattegories",
    element: <h2>Cattegories page</h2>,
  },
];

export default AppLayoutRoutes;
