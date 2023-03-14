import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setCurrentSearch } from "@/features/searchBooks/searchBooksSlice";

export default function useSearchBooks() {
  const dispatch = useAppDispatch();
  const currentSearch = useAppSelector(value => value.searchBooks.currentSearch);

  const handleSetCurrentSearch = useCallback((event: any) => {
    dispatch(setCurrentSearch(event.target.value))
  }, []);

  const setCurrentSearchState = useCallback((value: string) => {
    dispatch(setCurrentSearch(value))
  }, []);

  return {
    currentSearch,
    handleSetCurrentSearch,
    setCurrentSearchState,
  }
}