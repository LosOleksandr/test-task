import { NavLink } from "react-router-dom"
import ThemeToggler from "./ThemeToggler"

const Header = () => {
  return (
    <div className="py-6 border-b border-zinc-400 relative">
      <nav className="flex justify-center">
        <ul className="flex gap-4 font-semibold ">
          <li>
            <NavLink
              className=" aria-[current=page]:text-blue-500 transition-colors"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" aria-[current=page]:text-blue-500  transition-colors"
              to={"catalog"}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" aria-[current=page]:text-blue-500  transition-colors"
              to={"favorite"}
            >
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
      <ThemeToggler className="absolute top-1/2 right-10 -translate-y-1/2" />
    </div>
  )
}

export default Header
