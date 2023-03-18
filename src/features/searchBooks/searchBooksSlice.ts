import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/wrapper";

type InitialStateSearchBooks = {
  currentSearch: string;
  loading: boolean;
}

const initialState: InitialStateSearchBooks = {
  currentSearch: "",
  loading: false,
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
  }
});

export const { 
  setCurrentSearch, 
  disableLoading, 
  enableLoading 
} = searchBooksSlice.actions;

export default searchBooksSlice.reducer