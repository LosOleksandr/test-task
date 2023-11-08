import React, { useEffect } from "react"
import Car from "../types/car"
import Button from "./Button"
import Modal from "./Modal"
import { IconHeart, IconHeartFilled } from "@tabler/icons-react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { handleFavoriteCars, selectCars } from "../app/slices/carsSlice"
import ModalCarItem from "./ModalCarItem"

type TCatItem = {
  car: Car
}

const CarItem = ({ car }: TCatItem) => {
  const {
    id,
    img,
    model,
    make,
    type,
    address,
    rentalCompany,
    year,
    rentalPrice,
    mileage,
  } = car

  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useAppDispatch()
  const { favorite } = useAppSelector(selectCars)
  const [isFavorite, setIsFavorite] = React.useState(false)
  const isCarInFavorite = React.useCallback(
    () => favorite.some((el) => el.id === id),
    [favorite, id],
  )

  const [, ...formattedAdress] = address.split(",")

  const carInfo = [
    ...formattedAdress,
    ...rentalCompany.split(","),
    type,
    make,
    mileage,
  ]

  const onModalClose = () => {
    setIsOpen(false)
  }

  const onModalOpen = () => {
    setIsOpen(true)
  }

  const handleFavorite = async (car: Car) => {
    dispatch(handleFavoriteCars(car))
  }

  useEffect(() => {
    setIsFavorite(isCarInFavorite)
  }, [isCarInFavorite])

  return (
    <>
      <div className="max-w-72 relative">
        <div className="relative before:absolute before:bg-gradient-to-b from-black/20 to-transparent before:block before:left-0 before:top-0 before:h-full before:w-full">
          <img
            src={img}
            alt=""
            className="h-[268px]  object-cover rounded-xl mb-4"
          />
        </div>
        <div className="flex justify-between">
          <h2 className="mb-2">
            {make} <span className="text-blue-500">{model}</span>,
            <span> {year}</span>
          </h2>
          <p>{rentalPrice}</p>
        </div>
        <ul className="mb-8">
          {carInfo.map((el, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-2 text-xs after:last-of-type:hidden text-gray-400 after:mr-2 after:block after:w-px after:bg-gray-400 after:h-4"
            >
              {el}
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleFavorite(car)}
          className="absolute top-4 right-4 text-white hover:text-blue-500 transition-colors"
        >
          {!isFavorite ? (
            <IconHeart size={"1.5rem"} />
          ) : (
            <IconHeartFilled
              className="text-blue-500 hover:text-blue-600 transition-colors"
              size={"1.5rem"}
            />
          )}
        </button>
        <Button onClick={onModalOpen}>Learn more</Button>
      </div>
      {isOpen && (
        <Modal onClose={onModalClose}>
          <ModalCarItem car={car} />
        </Modal>
      )}
    </>
  )
}

export default CarItem
