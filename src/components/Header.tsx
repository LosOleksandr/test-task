import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import ThemeToggler from "./ThemeToggler"

const Header = () => {
  return (
    <div className="py-6 border-b relative">
      <nav className="flex justify-center">
        <ul className="flex gap-4 text-blue-300 font-semibold ">
          <li>
            <NavLink className="hover:text-blue-500 transition-colors" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-blue-500 transition-colors"
              to={"catalog"}
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
      <ThemeToggler className="absolute top-1/2 right-10 -translate-y-1/2" />
    </div>
  )
}

export default Header
