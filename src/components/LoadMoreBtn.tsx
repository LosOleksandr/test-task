import React from "react"
import { useAppDispatch } from "../app/hooks"
import { pageIncrement } from "../app/slices/carsSlice"

type TLoadMoreBtn = {
  isShown: boolean
}

const LoadMoreBtn = ({ isShown }: TLoadMoreBtn) => {
  const dispatch = useAppDispatch()

  const loadMore = () => {
    dispatch(pageIncrement())
  }

  return <>{isShown && <button onClick={loadMore}>Load more</button>}</>
}

export default LoadMoreBtn
