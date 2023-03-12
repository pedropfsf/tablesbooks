import { Moon } from "@styled-icons/boxicons-regular/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

import useTheme from "@/hooks/useTheme";
import colors from "@/styles/colors";

export default function IconTheme() {
  const { 
    setStorageThemeDark, 
    setStorageThemeLight, 
    theme 
  } = useTheme();
  
  if (theme === "light") {
    return (
      <Sun
        size={40}
        color={colors.yellow}
        onClick={setStorageThemeDark}
      />
    )
  } else {
    return (
      <Moon
        size={40}
        color={colors.purple}
        onClick={setStorageThemeLight}
      />
    )
  }
}