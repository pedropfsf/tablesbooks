import styled from "styled-components";

import colors from "@/styles/colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.black + "10"}; 
  
  margin-right: 64px;
  padding: 8px;
  
  border: ${colors.black + "30"} solid 1px;
  border-radius: 8px;
  
  &:hover {
    background-color: ${colors.black + "30"};
  }
`;

export const Field = styled.input`
  flex: 1;

  border: none;
  outline: none;

  background-color: transparent;

  font-size: 16px;

  &::placeholder {
    color: ${colors.black + "50"}
  }
`;