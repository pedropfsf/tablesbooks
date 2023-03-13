import styled from "styled-components";
import Image from "next/image";
import colors from "@/styles/colors";

type ThemeDarkProps = {
  theme?: "light" | "dark";
}

function applyTheme(props: any) {
  if (props.theme === "light") {
    return colors.black;
  } else {
    return colors.white;
  }
}

export const Container = styled.div<ThemeDarkProps>`
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 4px;

  border: ${applyTheme} dashed 2px;
  border-radius: 8px;

  margin: 8px;
`;

export const ImageBook = styled.img``;

export const Title = styled.h2<ThemeDarkProps>`
  color: ${applyTheme};
  
  text-align: center;

  margin: 0 16px;
`;

export const Description = styled.p<ThemeDarkProps>`
  color: ${applyTheme};
  
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

// export const CategoryTag = styled.span`
//   padding: 8px;

  
// `;