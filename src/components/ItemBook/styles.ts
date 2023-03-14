import styled from "styled-components";
import Image from "next/image";
import colors from "@/styles/colors";

type ThemeDarkProps = {
  theme?: "light" | "dark";
}

function applyTheme(directionColor: "black" | "white" = "black") {
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

export const Container = styled.div<ThemeDarkProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 280px;

  padding: 16px;

  background-color: ${applyTheme("white")};

  border: ${applyTheme()} dashed 2px;
  border-radius: 8px;

  @media screen and (max-width: 627px) {
    width: 100%;
  }
`;

export const ImageBook = styled.img`
  width: 200px;
`;

export const Title = styled.h3<ThemeDarkProps>`
  color: ${applyTheme()};
  
  text-align: center;
`;

export const Description = styled.p<ThemeDarkProps>`
  color: ${applyTheme()};
  
  text-align: start;
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;
`;