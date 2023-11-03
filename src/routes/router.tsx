import { createBrowserRouter, RouterProvider } from "react-router-dom"
import pages from "../pages"
import Layout from "../components/Layout"
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalogue",
        element: <pages.Catalogue />,
      },
    ],
  },
])
export default router
