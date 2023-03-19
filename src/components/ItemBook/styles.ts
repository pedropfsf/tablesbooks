import styled from "styled-components";
import Image from "next/image";

import colors from "@/styles/colors";
import Theme from "@/utils/Theme";

type ThemeDarkProps = {
  theme?: "light" | "dark";
}

export const Container = styled.div<ThemeDarkProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 280px;

  padding: 16px;

  background-color: ${Theme.applyTheme("white")};

  border: ${Theme.applyTheme()} dashed 2px;
  border-radius: 8px;

  @media screen and (max-width: 627px) {
    width: 100%;
  }
`;

export const Title = styled.h3<ThemeDarkProps>`
  color: ${Theme.applyTheme()};
  
  text-align: center;
`;

export const Description = styled.p<ThemeDarkProps>`
  color: ${Theme.applyTheme()};
  
  text-align: start;
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ButtonsLeft = styled.div`
  display: flex;
  gap: 8px;
`;