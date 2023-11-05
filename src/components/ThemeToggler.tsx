import React from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectTheme, setTheme } from "../app/slices/themeSlice"

const ThemeToggler = ({ className }: { className: string }) => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const changeTheme = () => {
    theme === "light" ? dispatch(setTheme("dark")) : dispatch(setTheme("light"))
  }

  return (
    <button
      className={`text-inherit hover:text-blue-500 transition-colors ${className}`}
      onClick={changeTheme}
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  )
}

export default ThemeToggler
