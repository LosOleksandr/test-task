import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { pageReset, selectCars } from "../app/slices/carsSlice"
import { getCars } from "../app/thunk/carsThunk"
import CarItem from "./CarItem"
import LoadMoreBtn from "./LoadMoreBtn"
import Car from "../types/car"
import FilterList from "./FilterList"

type TCarList = {
  cars: Car[]
  shouldDisplay: boolean
}

const CarList = ({ cars, shouldDisplay }: TCarList) => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector(selectCars)

  React.useEffect(() => {
    dispatch(pageReset())
    dispatch(getCars())
  }, [dispatch])

  const noResults = cars.length === 0 && filter

  return (
    <div className="py-12 flex flex-col justify-center">
      <>
        <FilterList shouldDisplay={shouldDisplay} />
        {noResults && <p>{`No results by ${filter}`}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-12 gap-x-8">
          {cars?.length > 0 &&
            cars?.map((car) => <CarItem key={car.id} car={car} />)}
        </ul>
        <LoadMoreBtn shouldDisplay={shouldDisplay} />
      </>
    </div>
  )
}

export default CarList
