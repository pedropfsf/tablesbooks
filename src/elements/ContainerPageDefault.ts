import colors from "@/styles/colors";
import styled from "styled-components";

type ContainerPageDefaultProps = {
  theme: "light" | "dark";
};

export const ContainerPageDefault = styled.div<ContainerPageDefaultProps>`
  padding-top: ${74 + 24}px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  background-color: ${props => props.theme === "light" ? colors.white : colors.black};
`;