import styled from "styled-components";

import Theme, { ThemeTyperComponent } from "@/utils/Theme";
import colors from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.strong<ThemeTyperComponent>`
  font-size: 24px;

  color: ${colors.red};
`;

export const Information = styled.p<ThemeTyperComponent>`
  font-size: 16px;

  color: ${Theme.applyTheme()};
`;