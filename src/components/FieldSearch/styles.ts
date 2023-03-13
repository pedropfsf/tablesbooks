import styled from "styled-components";

import colors from "@/styles/colors";

type ColorComponents = {
  color?: string;
}

export const Container = styled.div<ColorComponents>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.color + "10"}; 
  
  margin-right: 64px;
  padding: 8px;
  
  border: ${props => props.color + "30"} solid 1px;
  border-radius: 8px;
  
  &:hover {
    background-color: ${props => props.color + "30"};
  }

  @media screen and (max-width: 426px) {
    margin-right: 16px;
  }
`;

export const Field = styled.input<ColorComponents>`
  width: 100%;

  border: none;
  outline: none;

  background-color: transparent;
  color: ${props => props.color};

  font-size: 16px;

  &::placeholder {
    color: ${props => props.color + "50"}
  }
`;