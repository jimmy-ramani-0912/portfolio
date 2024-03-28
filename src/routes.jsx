import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/index"));
const Projects = lazy(() => import("./pages/Projects/index"));
const Blogs = lazy(() => import("./pages/Blogs/index"));

export const PublicRoutes = [
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "*",
    element: <Home />,
  },
];
