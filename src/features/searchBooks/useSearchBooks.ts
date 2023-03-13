import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setCurrentSearch } from "@/features/searchBooks/searchBooksSlice";

export default function useSearchBooks() {
  const dispatch = useAppDispatch();
  const searchBooks = useAppSelector(value => value.searchBooks.currentSearch);

  const handleSetCurrentSearch = useCallback((event: any) => {
    console.log(event);

    dispatch(setCurrentSearch(event.target.value))
  }, []);

  return {
    searchBooks,
    handleSetCurrentSearch,
  }
}