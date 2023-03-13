import { useCallback } from "react";
import { StyledIcon, StyledIconProps } from "@styled-icons/styled-icon";

import { useRouter } from "next/router";

import colors from "@/styles/colors";

type IconMenuProps = StyledIconProps & {
  Icon: StyledIcon;
  nameRoute: string;
  theme?: "light" | "dark" | null;
};

export default function IconMenu({ Icon, nameRoute, theme, ...props }: IconMenuProps) {
  const router = useRouter();

  const setTheme = useCallback(() => {
    if (router.pathname === nameRoute) {
      return colors.red;
    } else {
      return theme === "light" ? colors.black : colors.white;
    }
  }, [theme, colors]);

  return (
    <Icon
      style={{ cursor: "pointer "}}
      color={setTheme()}
      size={32}
      {...props}
    />
  )
}