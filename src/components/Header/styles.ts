import styled from "styled-components";
import colors from "@/styles/colors";

type ContainerProps = {
  theme: "light" | "dark";
};

export const Container = styled.header<ContainerProps>`
  width: 100%;

  padding: 16px;

  background-color: ${props => 
    props.theme === "light" 
    ? 
    colors.white 
    : 
    colors.black
  };
  
  border-bottom: ${props => 
    props.theme === "light" 
    ? 
    colors.black 
    : 
    colors.white
  } dashed 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  z-index: 10;
`;