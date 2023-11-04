import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { pageReset, selectCars } from "../app/slices/carsSlice"
import { getCars } from "../app/thunk/carsThunk"
import CarItem from "./CarItem"
import LoadMoreBtn from "./LoadMoreBtn"

const CarList = () => {
  const dispatch = useAppDispatch()
  const [isShown, setIsShown] = React.useState(true)
  const { cars, page } = useAppSelector(selectCars)
  const calcCarsLength = React.useMemo(
    () => cars.length % 12 === 0,
    [cars.length],
  )
  React.useEffect(() => {
    dispatch(pageReset())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(getCars({ page, limit: 12 }))
    setIsShown(calcCarsLength)
  }, [calcCarsLength, dispatch, page])

  return (
    <div>
      <ul className="flex flex-wrap gap-y-12 gap-x-8">
        {cars?.length > 0 &&
          cars?.map((car) => <CarItem key={car.id} car={car} />)}
      </ul>
      <LoadMoreBtn isShown={isShown} />
    </div>
  )
}

export default CarList
