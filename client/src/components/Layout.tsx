import React, { useEffect } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectTheme } from "../app/slices/themeSlice"

const Layout = () => {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
