import { useAppSelector } from "../app/hooks"
import { selectCars } from "../app/slices/carsSlice"
import CarList from "../components/CarList"
import Section from "../components/Section"
import { NavLink } from "react-router-dom"

const Favorite = () => {
  const { favorite } = useAppSelector(selectCars)

  return (
    <Section>
      {favorite.length > 0 ? (
        <CarList cars={favorite} shouldDisplay={false} />
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-center text-xl pt-16">
            Your favorite list is empty
          </p>
          <NavLink className="text-center text-lg " to={"/catalog"}>
            <span className="text-blue-500">View</span> car catalog
          </NavLink>
        </div>
      )}
    </Section>
  )
}

export default Favorite
