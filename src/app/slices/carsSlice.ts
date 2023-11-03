import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Car from "../../types/car"
import { getCars } from "../thunk/carsThunk"
import { RootState } from "../store"

interface ICarsInitialState {
  cars: Car[] | null
  isLoading: boolean
  error: unknown
}

const initialState: ICarsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
}

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.cars = null
      state.isLoading = true
      state.error = null
    })
    builder.addCase(
      getCars.fulfilled,
      (state, action: PayloadAction<Car[]>) => {
        state.cars = action.payload
        state.error = null
        state.isLoading = false
      },
    )
    builder.addCase(
      getCars.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.cars = null
        state.isLoading = false
        state.error = action.payload
      },
    )
  },
})

export const selectCars = (state: RootState) => state.cars
export default carsSlice.reducer
