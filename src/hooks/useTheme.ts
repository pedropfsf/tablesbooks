import { useCallback, useState, useEffect } from "react";

type ThemeData = "light" | "dark" | null;

export default function useTheme() {
  const [ theme, setTheme ] = useState<ThemeData>("light");

  const setStorageThemeLight = useCallback(() => {
    setTheme("light");
  }, []);
  
  const setStorageThemeDark = useCallback(() => {
    setTheme("dark");
  }, []);
  
  useEffect(() => {
    setTheme(localStorage.getItem("@theme") as ThemeData);
  }, []);

  useEffect(() => {
    localStorage.setItem("@theme", theme ?? "light");
  }, [theme]);

  return {
    setStorageThemeLight,
    setStorageThemeDark,
    theme,
  }
}