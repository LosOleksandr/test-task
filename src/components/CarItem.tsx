import React from "react"
import Car from "../types/car"
import testImg from "../../assets/test-img.jpg"

type TCatItem = {
  car: Car
}

const CarItem = ({ car }: TCatItem) => {
  const { model, make, type, year, rentalPrice } = car

  return (
    <div className="w-72 ">
      <img src={testImg} alt="" />
      <div className="flex justify-between">
        <h2>
          {make} <span>{model}</span>, <span>{year}</span>
        </h2>
        <p>{rentalPrice}</p>
      </div>
    </div>
  )
}

export default CarItem
