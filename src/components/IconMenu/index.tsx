import { useCallback, useMemo } from "react";
import { StyledIcon, StyledIconProps } from "@styled-icons/styled-icon";

import { useRouter } from "next/router";

import colors from "@/styles/colors";

type IconMenuProps = StyledIconProps & {
  Icon: StyledIcon;
  nameRoute: string;
  theme?: "light" | "dark" | null;
  isVisible?: boolean;
};

export default function IconMenu({
  Icon,
  nameRoute,
  theme,
  isVisible = true,
  ...props
}: IconMenuProps) {
  const router = useRouter();

  function getCurrentPath() {
    return router.asPath.split("/")[1];
  }

  function setTheme() {
    if (getCurrentPath() === nameRoute) {
      return colors.red;
    }
    if (theme === "light") {
      return colors.black;
    }
    return colors.white;
  }

  if (!isVisible) {
    return <></>;
  }

  return (
    <Icon
      style={{ cursor: "pointer " }}
      color={setTheme()}
      size={32}
      {...props}
    />
  );
}
