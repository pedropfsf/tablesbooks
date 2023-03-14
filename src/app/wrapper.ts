import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import themeSlice from "@/features/theme/themeSlice";
import searchBooksSlice from "@/features/searchBooks/searchBooksSlice";

const wrapper = configureStore({
  reducer: {
    theme: themeSlice,
    searchBooks: searchBooksSlice,
  }
});

export type RootState = ReturnType<typeof wrapper.getState>;
export type AppDispatch = typeof wrapper.dispatch;

export default createWrapper(() => wrapper);