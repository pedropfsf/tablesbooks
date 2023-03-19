import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { 
  selectTheme, 
  applyThemeDark, 
  applyThemeLight,  
  loadTheme,
} from "@/features/theme/themeSlice";

export default function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleSetThemeDark = useCallback(() => dispatch(applyThemeDark()), [dispatch]);
  const handleSetThemeLight = useCallback(() => dispatch(applyThemeLight()), [dispatch]);
  
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  return {
    handleSetThemeDark,
    handleSetThemeLight,
    theme: theme,
  }
}