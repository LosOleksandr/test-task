import React from "react"
import Car from "../types/car"
import Button from "./Button"

type TModalCarItem = {
  car: Car
}

const ModalCarItem = ({ car }: TModalCarItem) => {
  const {
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalCompany,
    rentalConditions,
    mileage,
  } = car

  const rentalConditionsArr = rentalConditions.split("\n")

  const [, ...formattedAdress] = address.split(",")

  const carInfo = [
    ...formattedAdress,
    ...rentalCompany.split(","),
    type,
    make,
    mileage,
    fuelConsumption,
    engineSize,
  ]

  return (
    <div className="w-[541px]">
      <img className="rounded-2xl h-80 w-full" src={img} alt="" />
      <div className="flex justify-between mt-4">
        <h2 className="mb-2 text-xl">
          {make} <span className="text-blue-500">{model}</span>,
          <span> {year}</span>
        </h2>
      </div>
      <ul className="mb-4">
        {carInfo.map((el, index) => (
          <li
            key={index}
            className="inline-flex items-center gap-2 text-sm after:last-of-type:hidden text-gray-400 after:mr-2 after:block after:w-px after:bg-gray-400 after:h-4 "
          >
            {el}
          </li>
        ))}
      </ul>
      <p className="text-md mb-6">{description}</p>
      <h3 className="mb-2">Accessories and functionalities:</h3>
      <ul className="mb-4">
        {accessories.concat(functionalities).map((el) => (
          <li
            className="inline-flex items-center gap-2 text-sm after:last-of-type:hidden text-gray-400 after:mr-2 after:block after:w-px after:bg-gray-400 after:h-4"
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
      <h3 className="mb-2">Rental Conditions:</h3>
      <ul className="flex gap-2 flex-wrap">
        {rentalConditionsArr.map((el) => (
          <li
            className="inline-flex p-2 items-center bg-slate-200 dark:bg-slate-600 rounded-xl"
            key={el}
          >
            {el}
          </li>
        ))}
        <li className="inline-flex p-2 items-center bg-slate-200 dark:bg-slate-600 rounded-xl">
          Mileage:{" "}
          <span className="text-blue-500">
            {mileage.toLocaleString("en-US")}
          </span>
        </li>
        <li className="inline-flex p-2 items-center bg-slate-200 dark:bg-slate-600 rounded-xl">
          Price: <span className="text-blue-500">{rentalPrice}</span>
        </li>
      </ul>
      <a href="tel:+380730000000" className="w-40 block mt-6">
        <Button>Rental Car</Button>
      </a>
    </div>
  )
}

export default ModalCarItem
