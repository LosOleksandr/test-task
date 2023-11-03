import { createBrowserRouter } from "react-router-dom"
import pages from "../pages"
import Layout from "../components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <pages.Home />,
      },
      {
        path: "/catalog",
        element: <pages.Catalog />,
      },
    ],
  },
])
export default router
