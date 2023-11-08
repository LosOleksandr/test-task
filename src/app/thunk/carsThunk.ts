import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Car from "../../types/car"
import { AxiosError } from "axios"
import { RootState } from "../store"

const instance = axios.create({
  baseURL: "https://654585f4fe036a2fa9545f05.mockapi.io/",
})

export const getCars = createAsyncThunk<Car[], void>(
  "cars/getCarsByMake",
  async (_, thunkApi) => {
    const {
      cars: { page, filter, limit },
    } = thunkApi.getState() as RootState

    try {
      const response = await instance.get("cars", {
        params: {
          page,
          limit,
          filter,
        },
      })
      if (response.status !== 200) {
        throw new Error(response.data)
      }
      return response.data
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message)
      }
    }
  },
)
