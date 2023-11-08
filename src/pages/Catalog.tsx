import React from "react"
import { useAppSelector } from "../app/hooks"
import { selectCars } from "../app/slices/carsSlice"
import Section from "../components/Section"
import "react-loading-skeleton/dist/skeleton.css"
import SkeletonWrapper from "../components/Skeleton"

const CarList = React.lazy(() => import("../components/CarList"))

const Catalog = () => {
  const { isLoading, cars } = useAppSelector(selectCars)

  return (
    <Section>
      {isLoading && <SkeletonWrapper />}
      <CarList shouldDisplay={true} cars={cars} />
    </Section>
  )
}

export default Catalog
