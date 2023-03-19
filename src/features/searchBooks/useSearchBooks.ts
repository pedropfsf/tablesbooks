import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { 
  setCurrentSearch, 
  disableLoading, 
  enableLoading,
  clearIdSaved,
  setIdSaved
} from "@/features/searchBooks/searchBooksSlice";

type CallbackProps = {
  onEnableLoading: () => void;
  onDisableLoading: () => void;
  currentSearch: string;
}

type Callback = (props: CallbackProps) => void;

export default function useSearchBooks() {
  const dispatch = useAppDispatch();

  const currentSearch = useAppSelector(value => value.searchBooks.currentSearch);
  const loading = useAppSelector(value => value.searchBooks.loading);
  const idSaved = useAppSelector(value => value.searchBooks.idSaved);

  const handleSetCurrentSearch = useCallback((event: any) => {
    dispatch(setCurrentSearch(event.target.value));
  }, [dispatch]);

  const setCurrentSearchState = useCallback((value: string) => {
    dispatch(setCurrentSearch(value));
  }, [dispatch]);

  const onEnableLoading = useCallback(() => {
    dispatch(enableLoading());
  }, [dispatch]);

  const onDisableLoading = useCallback(() => {
    dispatch(disableLoading());
  }, [dispatch]);

  const setCurrentIdSaved = useCallback((value: string) => {
    dispatch(setIdSaved(value));
  }, [dispatch]);
  
  const clearCurrentIdSaved = useCallback(() => {
    dispatch(clearIdSaved());
  }, [dispatch]);

  return {
    currentSearch,
    handleSetCurrentSearch,
    setCurrentSearchState,
    loading,
    onEnableLoading,
    onDisableLoading,
    setCurrentIdSaved,
    clearCurrentIdSaved,
    idSaved,
  }
}