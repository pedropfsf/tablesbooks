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

  const handleSetThemeDark = useCallback(() => dispatch(applyThemeDark()), []);
  const handleSetThemeLight = useCallback(() => dispatch(applyThemeLight()), []);
  
  useEffect(() => {
    dispatch(loadTheme());
  }, []);

  return {
    handleSetThemeDark,
    handleSetThemeLight,
    theme: theme,
  }
}