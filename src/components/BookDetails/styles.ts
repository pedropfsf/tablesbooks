import styled from "styled-components";

import Theme, { ThemeTyperComponent } from "@/utils/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.span<ThemeTyperComponent>`
  color: ${Theme.applyTheme()};

  font-size: 12px;
`;

export const Lines = styled.div<ThemeTyperComponent>`
  border: ${Theme.applyTheme()} dashed 2px;
`;