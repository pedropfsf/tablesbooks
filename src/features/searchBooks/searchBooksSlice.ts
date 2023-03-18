import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/wrapper";

type InitialStateSearchBooks = {
  currentSearch: string;
  loading: boolean;
  idSaved: string;
}

const initialState: InitialStateSearchBooks = {
  currentSearch: "",
  loading: false,
  idSaved: "",
}

const searchBooksSlice = createSlice({
  initialState,
  name: "searchBooks",
  reducers: {
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
    enableLoading: (state) => {
      state.loading = true;
    },
    disableLoading: (state) => {
      state.loading = false;
    },
    setIdSaved: (state, action) => {
      state.idSaved = action.payload;
    },
    clearIdSaved: (state) => {
      state.idSaved = "";
    }
  }
});

export const { 
  setCurrentSearch, 
  disableLoading, 
  enableLoading,
  setIdSaved,
  clearIdSaved,
} = searchBooksSlice.actions;

export default searchBooksSlice.reducer