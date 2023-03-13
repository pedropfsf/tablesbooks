import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/wrapper";

import Cookies from "cookies-js"; 

type InitialState = {
  value?: "light" | "dark";
}

const initialState: InitialState = {
  value: "light",
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    applyThemeDark: (state) => {
      state.value = "dark";
      Cookies.set("theme", "dark");
    },
    applyThemeLight: (state) => {
      state.value = "light";
      Cookies.set("theme", "light");
    },
    loadTheme: (state) => {
      state.value = Cookies.get("theme") as "light" | "dark";
    },
  }
});

export const { 
  applyThemeDark, 
  applyThemeLight, 
  loadTheme,
} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;