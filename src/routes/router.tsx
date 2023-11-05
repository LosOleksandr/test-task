import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          let Home = await import("../pages/Home")
          return {
            Component: Home.default,
          }
        },
      },
      {
        path: "/catalog",
        async lazy() {
          let Catalog = await import("../pages/Catalog")
          return {
            Component: Catalog.default,
          }
        },
      },
      {
        path: "/favorite",
        async lazy() {
          let Favorite = await import("../pages/Favorite")
          return {
            Component: Favorite.default,
          }
        },
      },
    ],
  },
])
export default router
