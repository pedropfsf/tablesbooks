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

  // const setTheme = useCallback(() => {
  //   if (router.pathname === nameRoute) {
  //     return colors.red;
  //   } else if (theme) {
  //     return theme === "light" ? colors.black : colors.white;
  //   } else {
  //     return colors.black;
  //   }
  // }, []);

  return (
    <Icon
      style={{ cursor: "pointer "}}
      color={router.pathname === nameRoute ? colors.red : colors.black}
      size={32}
      {...props}
    />
  )
}