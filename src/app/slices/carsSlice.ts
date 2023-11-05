import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Car from "../../types/car"
import { getCars } from "../thunk/carsThunk"
import { RootState } from "../store"

interface ICarsInitialState {
  cars: Car[]
  favorite: Car[]
  isLoading: boolean
  error: unknown
  page: number
}

const initialState: ICarsInitialState = {
  cars: [],
  favorite: [],
  isLoading: false,
  error: null,
  page: 1,
}

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    pageIncrement: (state) => {
      state.page += 1
    },
    pageReset: (state) => {
      state.page = 1
      state.cars = []
    },
    handleFavoriteCars: (state, action) => {
      const isFavorite = state.favorite.map(
        (car) => car.id === action.payload.id,
      )

      if (isFavorite) {
      }

      state.favorite.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(
      getCars.fulfilled,
      (state, action: PayloadAction<Car[]>) => {
        state.isLoading = false
        state.cars =
          state.page === 1 ? action.payload : [...state.cars, ...action.payload]
        state.error = null
      },
    )
    builder.addCase(
      getCars.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.cars = []
        state.isLoading = false
        state.error = action.payload
      },
    )
  },
})

export const { pageIncrement, pageReset } = carsSlice.actions
export const selectCars = (state: RootState) => state.cars
export default carsSlice.reducer
