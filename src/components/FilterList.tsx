import React, { useRef } from "react"
import filterValues from "../common"
import Filter from "./Filter"
import { SelectInstance } from "react-select"

type TFilterList = {
  shouldDisplay: boolean
}

const FilterList = ({ shouldDisplay = true }: TFilterList) => {
  const makesInputRef = useRef<SelectInstance>(null)
  const pricesInputRef = useRef<SelectInstance>(null)

  const resetValue = (filterName: string) => {
    switch (filterName) {
      case "makes":
        if (pricesInputRef.current) {
          pricesInputRef.current.clearValue()
        }
        break
      case "prices":
        if (makesInputRef.current) {
          makesInputRef.current.clearValue()
        }
        break
      default:
        break
    }
  }

  return (
    shouldDisplay && (
      <form className="flex gap-4 mb-12">
        <Filter
          label="Car brand"
          filterName="makes"
          ref={makesInputRef}
          options={filterValues.makes}
          placeholder="Select an option"
          resetValue={resetValue}
        />
        <Filter
          label="Price/1 hour"
          filterName="prices"
          ref={pricesInputRef}
          options={filterValues.prices}
          placeholder="Select an option"
          resetValue={resetValue}
        />
      </form>
    )
  )
}

export default FilterList
