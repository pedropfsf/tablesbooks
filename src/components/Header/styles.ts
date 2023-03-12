import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.header`
  width: 100%;

  padding: 16px;

  background-color: ${colors.white};
  
  border-bottom: ${colors.black} dashed 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;