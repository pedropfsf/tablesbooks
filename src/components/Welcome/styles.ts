import styled from "styled-components";

import colors from "@/styles/colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Illustration = styled.img.attrs({
  src: "/images/svgs/illustration-welcome.svg",
  alt: "Ilustração de uma pessoa passando página de um livro gigante",
})`
  width: 400px;
  
  object-fit: cover;
  
  @media screen and (max-width: 500px) {
    width: calc(100% - 24px);
  }
`;

export type TitleProps = {
  theme?: "dark" | "light";
}

export const Title = styled.h3<TitleProps>`
  color: ${props => props.theme === "light" ? colors.black : colors.white};

  text-align: center;
`;