import { useCallback, useState, useEffect } from "react";

import colors from "@/styles/colors";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { 
  selectTheme, 
  applyThemeDark, 
  applyThemeLight,  
  saveTheme
} from "@/features/theme/themeSlice";

export default function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleSetThemeDark = useCallback(() => dispatch(applyThemeDark()), []);
  const handleSetThemeLight = useCallback(() => dispatch(applyThemeLight()), []);

  useEffect(() => {
    dispatch(saveTheme);
  }, [theme]);

  return {
    handleSetThemeDark,
    handleSetThemeLight,
    theme: theme,
  }
}