import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/wrapper";

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
    },
    applyThemeLight: (state) => {
      state.value = "light";
    },
    saveTheme: (state) => {
      localStorage.setItem("@theme", state.value ?? "light");
    }
  }
});

export const { saveTheme, applyThemeDark, applyThemeLight } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;