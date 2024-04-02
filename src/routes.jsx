import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/index"));
const Projects = lazy(() => import("./pages/Projects/index"));
const Blogs = lazy(() => import("./pages/Blogs/index"));

export const PublicRoutes = [
  {
    path: "portfolio/projects",
    element: <Projects />,
  },
  {
    path: "portfolio/blogs",
    element: <Blogs />,
  },
  {
    path: "*",
    element: <Home />,
  },
];
