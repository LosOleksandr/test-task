import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Car from "../../types/car"
import { AxiosError } from "axios"


const instance = axios.create({
  baseURL: "https://654517125a0b4b04436d9c36.mockapi.io/",
})

export const getCars = createAsyncThunk<Car[], void>(
  "cars/getCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("car")
      if (response.status !== 200) {
        throw new Error(response.data)
      }
      return response.data
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message)
      }
    }
  },
)
