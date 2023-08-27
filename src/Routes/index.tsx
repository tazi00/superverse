import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import AppLayoutRoutes from "./AppLayoutRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: AppLayoutRoutes,
  },
]);
export default router;
