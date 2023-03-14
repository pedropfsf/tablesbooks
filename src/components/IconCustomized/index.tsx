import { useCallback, useState } from "react";
import { StyledIcon, StyledIconProps } from "@styled-icons/styled-icon";

import { useRouter } from "next/router";

import colors from "@/styles/colors";

type IconCustomizedProps = StyledIconProps & {
  Icon: StyledIcon;
  theme?: "light" | "dark" | null;
  size?: number;
};

export default function IconCustomized({ Icon, size = 24, theme, ...props }: IconCustomizedProps) {
  const [isActive, setIsActive] = useState(false);

  const setTheme = useCallback(() => {
    if (isActive) {
      return colors.red;
    } else {
      return theme === "light" ? colors.black : colors.white;
    }
  }, [
    theme, 
    colors,
    isActive,
  ]);

  return (
    <Icon
      style={{ cursor: "pointer "}}
      color={setTheme()}
      size={size}
      onMouseOver={(event) => {
        setIsActive(true);

        if (props["onMouseOver"]) {
          props["onMouseOver"](event);
        }
      }}
      onMouseOut={(event) => {
        setIsActive(false);
        
        if (props["onMouseOut"]) {
          props["onMouseOut"](event);
        }
      }}
      {...props}
    />
  )
}