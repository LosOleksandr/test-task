import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Car from "../../types/car"
import { getCars } from "../thunk/carsThunk"
import { RootState } from "../store"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"

interface ICarsInitialState {
  cars: Car[]
  favorite: Car[]
  isLoading: boolean
  error: unknown
  page: number
  limit: number
  filter: string
}

const initialState: ICarsInitialState = {
  cars: [],
  favorite: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 12,
  filter: "",
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
      const carIndex = state.favorite.findIndex(
        (el) => el.id === action.payload.id,
      )
      if (carIndex === -1) {
        state.favorite.push({ ...action.payload })
      } else {
        state.favorite.splice(carIndex, 1)
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload !== "All" ? action.payload : ""
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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
}

export const { pageIncrement, pageReset, setFilter, handleFavoriteCars } =
  carsSlice.actions

const persistedReducer = persistReducer(persistConfig, carsSlice.reducer)

export const selectCars = (state: RootState) => state.cars

export default persistedReducer
