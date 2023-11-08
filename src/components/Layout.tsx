import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectTheme } from "../app/slices/themeSlice"
import Loader from "./Loader"

const Layout = () => {
  const theme = useAppSelector(selectTheme)

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div>
      <Header />
      <React.Suspense fallback={<Loader />}>
        <Outlet />
      </React.Suspense>
    </div>
  )
}

export default Layout
