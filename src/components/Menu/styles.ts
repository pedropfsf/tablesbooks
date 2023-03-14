import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 426px) {
    gap: 8px;
  }
`;