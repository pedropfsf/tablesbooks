import { Moon } from "@styled-icons/boxicons-regular/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

import colors from "@/styles/colors";

import useTheme from "@/features/theme/useTheme";

export default function IconTheme() {
  const { 
    theme, 
    handleSetThemeDark, 
    handleSetThemeLight 
  } = useTheme();

  if (theme === "light") {
    return (
      <Sun
        style={{ cursor: "pointer" }}
        size={40}
        color={colors.yellow}
        onClick={handleSetThemeDark}
        />
      )
  } else {
    return (
      <Moon
        style={{ cursor: "pointer" }}
        size={40}
        color={colors.purple}
        onClick={handleSetThemeLight}
      />
  )
  }
}