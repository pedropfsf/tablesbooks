import colors from "@/styles/colors";
import styled from "styled-components";

type ContainerPageDefaultProps = {
  theme: "light" | "dark";
};

export const ContainerPageDefault = styled.div<ContainerPageDefaultProps>`
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  background-color: ${props => props.theme === "light" ? colors.white : colors.black};
`;