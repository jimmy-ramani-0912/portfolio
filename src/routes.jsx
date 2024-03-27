import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/index"));
const Blogs = lazy(() => import("./pages/Blogs/index"));

export const PublicRoutes = [
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "*",
    element: <Home />,
  },
];
