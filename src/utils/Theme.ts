import colors from "@/styles/colors";

export type ThemeTyperComponent = {
  theme?: "light" | "dark";
}

class Theme {
  static applyTheme(directionColor: "black" | "white" = "black") {
    if (directionColor === "black") {
      return (props: any) => {
        if (props.theme === "light") {
          return colors.black;
        } else {
          return colors.white;
        }
      }
    } else {
      return (props: any) => {
        if (props.theme === "light") {
          return colors.white;
        } else {
          return colors.black;
        }
      }
    }
  }
}

export default Theme;