import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Trending from "../Pages/Trending/Trending";

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
    path: "/trending",
    element: <Trending />,
  },
];

export default AppLayoutRoutes;
