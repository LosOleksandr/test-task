import React, { forwardRef } from "react"
import { useAppDispatch } from "../app/hooks"
import { pageReset, setFilter } from "../app/slices/carsSlice"
import { getCars } from "../app/thunk/carsThunk"
import Select, { SelectInstance } from "react-select"

type TFilter = {
  filterName: string
  placeholder: string
  options: {
    value: string
    label: string
  }[]
  label: string
  resetValue: (filterName: string) => void
}

const Filter = forwardRef<SelectInstance, TFilter>(
  ({ filterName, options, placeholder, resetValue, label }, ref) => {
    const dispatch = useAppDispatch()

    const submit = async (selectedValue: any) => {
      if (selectedValue === null) return
      if (selectedValue.value === "all") {
        dispatch(setFilter(""))
      } else {
        dispatch(setFilter(selectedValue.value))
      }
      resetValue(filterName)
      dispatch(pageReset())
      try {
        await dispatch(getCars()).unwrap()
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <div>
        <label className="block text-gray-400 mb-2">{label}</label>
        <Select
          ref={ref}
          classNames={{
            control: (state) => "border-red-500",
          }}
          options={options}
          onChange={submit}
          placeholder={placeholder}
        />
      </div>
    )
  },
)

export default Filter
