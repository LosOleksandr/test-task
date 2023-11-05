import React from "react"
import Car from "../types/car"
import testImg from "../../assets/test-img.jpg"
import Button from "./Button"
import Modal from "./Modal"
import { IconHeart } from "@tabler/icons-react"
type TCatItem = {
  car: Car
}

const CarItem = ({ car }: TCatItem) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)
  const {
    model,
    make,
    type,
    address,
    rentalCompany,
    year,
    rentalPrice,
    mileage,
  } = car

  const [, ...formattedAdress] = address.split(",")

  const carInfo = [
    ...formattedAdress,
    ...rentalCompany.split(","),
    type,
    make,
    mileage,
  ]

  const onModalClose = () => {
    setIsOpen(true)
  }

  const onModalOpen = () => {
    setIsOpen(false)
  }

  const addToFavorite = () => {
    setIsFavorite(true)
  }

  return (
    <>
      <div className="max-w-72 relative ">
        <img
          src={testImg}
          alt=""
          className="h-[268px] object-cover rounded-xl mb-4 bg-gradient-to-b from-black from-50% to-transparent"
        />
        <div className="flex justify-between">
          <h2 className="mb-2">
            {make} <span className="text-blue-500">{model}</span>,
            <span> {year}</span>
          </h2>
          <p>{rentalPrice}</p>
        </div>
        <ul className="mb-8">
          {carInfo.map((el, index) => (
            <>
              <li
                key={index}
                className="inline-flex items-center gap-2 text-xs after:last-of-type:hidden text-gray-400 after:mr-2 after:block after:w-px after:bg-gray-400 after:h-4 "
              >
                {el}
              </li>
            </>
          ))}
        </ul>
        <button className="absolute top-2 right-2 text-white hover:text-blue-500 transition-colors">
          <IconHeart size={"2rem"} />
        </button>
        <Button onClick={onModalOpen}>Learn more</Button>
      </div>
      {isOpen && <Modal onClose={onModalClose}></Modal>}
    </>
  )
}

export default CarItem
