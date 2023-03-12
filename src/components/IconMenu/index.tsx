import { useState, useCallback, useEffect } from "react";
import { StyledIcon, StyledIconProps } from "@styled-icons/styled-icon";

import { useRouter } from "next/router";

import colors from "@/styles/colors";

type IconMenuProps = StyledIconProps & {
  Icon: StyledIcon;
  nameRoute: string;
};

export default function IconMenu({ Icon, nameRoute, ...props }: IconMenuProps) {
  const router = useRouter();

  return (
    <Icon
      style={{ cursor: "pointer "}}
      color={router.pathname === nameRoute ? colors.red : colors.black}
      size={32}
      {...props}
    />
  )
}