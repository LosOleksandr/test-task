import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"

interface IThemeState {
  mode: "light" | "dark"
}

const initialState: IThemeState = {
  mode: "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload
    },
  },
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, themeSlice.reducer)

export const { setTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.mode

export default persistedReducer
