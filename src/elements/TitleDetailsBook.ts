import styled from "styled-components";

import Theme, { ThemeTyperComponent } from "@/utils/Theme";

const TitleDetailsBook = styled.h1<ThemeTyperComponent>`
  color: ${Theme.applyTheme()};

  @media screen and (max-width: 724px) {
    text-align: center;
  }
`;

export default TitleDetailsBook;