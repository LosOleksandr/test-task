import React, { useEffect } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectTheme } from "../app/slices/themeSlice"
import { selectCars } from "../app/slices/carsSlice"
import { getCars } from "../app/thunk/carsThunk"

const Layout = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const cars = useAppSelector(selectCars)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    dispatch(getCars())
  }, [dispatch, theme])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
