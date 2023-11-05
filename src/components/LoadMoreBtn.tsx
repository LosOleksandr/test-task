import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { pageIncrement, selectCars } from "../app/slices/carsSlice"

type TLoadMoreBtn = {
  isShown: boolean
}

const LoadMoreBtn = ({ isShown }: TLoadMoreBtn) => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(selectCars)
  console.log('isLoading: ', isLoading);

  const loadMore = () => {
    dispatch(pageIncrement())
  }

  return (
    <>
      {isShown && (
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
