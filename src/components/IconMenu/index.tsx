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
  const path = useMemo(() => router.asPath.split("/")[1], [router]);

  const setTheme = useCallback(() => {
    if (path === nameRoute) {
      return colors.red;
    } else {
      return theme === "light" ? colors.black : colors.white;
    }
  }, [
    path, 
    nameRoute, 
    theme, 
    colors
  ]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <Icon
      style={{ cursor: "pointer "}}
      color={setTheme()}
      size={32}
      {...props}
    />
  )
}