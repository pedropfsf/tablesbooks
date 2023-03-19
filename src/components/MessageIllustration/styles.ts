import styled from "styled-components";

import colors from "@/styles/colors";

import Theme, { ThemeTyperComponent } from "@/utils/Theme";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Illustration = styled.img<ThemeTyperComponent>`
  width: 400px;
  
  object-fit: cover;
  
  @media screen and (max-width: 500px) {
    width: calc(100% - 24px);
  }

  color: ${Theme.applyTheme()};
`;

export const Title = styled.h3<ThemeTyperComponent>`
  color: ${Theme.applyTheme()};

  text-align: center;
`;