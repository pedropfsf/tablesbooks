import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/wrapper";

type InitialStateSearchBooks = {
  currentSearch: string;
}

const initialState: InitialStateSearchBooks = {
  currentSearch: "",
}

const searchBooksSlice = createSlice({
  initialState,
  name: "searchBooks",
  reducers: {
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload;
    },
    fetchBooks: (state) => {

    }
  }
});

export const { setCurrentSearch } = searchBooksSlice.actions;

// export const selectSearchBooks = (value: RootState) => value.searchBooks.currentSearch;

export default searchBooksSlice.reducer