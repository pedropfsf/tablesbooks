import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { 
  setCurrentSearch, 
  disableLoading, 
  enableLoading 
} from "@/features/searchBooks/searchBooksSlice";

type CallbackProps = {
  onEnableLoading: () => void;
  onDisableLoading: () => void;
  currentSearch: string;
}

type Callback = (props: CallbackProps) => void;

export default function useSearchBooks(callback?: Callback) {
  const dispatch = useAppDispatch();

  const currentSearch = useAppSelector(value => value.searchBooks.currentSearch);
  const loading = useAppSelector(value => value.searchBooks.loading);

  const handleSetCurrentSearch = useCallback((event: any) => {
    dispatch(setCurrentSearch(event.target.value));
  }, []);

  const setCurrentSearchState = useCallback((value: string) => {
    dispatch(setCurrentSearch(value));
  }, []);

  const onEnableLoading = useCallback(() => {
    dispatch(enableLoading());
  }, []);

  const onDisableLoading = useCallback(() => {
    dispatch(disableLoading());
  }, []);

  return {
    currentSearch,
    handleSetCurrentSearch,
    setCurrentSearchState,
    loading,
    onEnableLoading,
    onDisableLoading,
  }
}