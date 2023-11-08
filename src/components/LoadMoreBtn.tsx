import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { pageIncrement, selectCars } from "../app/slices/carsSlice"
import { getCars } from "../app/thunk/carsThunk"

type TLoadMoreBtn = {
  shouldDisplay: boolean
}

const LoadMoreBtn = ({ shouldDisplay = true }: TLoadMoreBtn) => {
  const dispatch = useAppDispatch()
  const [isShown, setIsShown] = React.useState(true)
  const { cars, isLoading } = useAppSelector(selectCars)
  const calcCarsLength = React.useMemo(
    () => cars.length > 0 && cars.length % 12 === 0,
    [cars.length],
  )

  const loadMore = async () => {
    dispatch(pageIncrement())
    try {
      await dispatch(getCars()).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    setIsShown(calcCarsLength)
  }, [calcCarsLength])

  return (
    <>
      {isShown && shouldDisplay && (
        <button
          className="mt-24 text-blue-500 relative disabled:text-blue-500/50 disabled:after:bg-blue-500/50 max-w-max mx-auto hover:after:opacity-100 after:opacity-0 after:transition-opacity after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-blue-500"
          onClick={loadMore}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </>
  )
}

export default LoadMoreBtn
