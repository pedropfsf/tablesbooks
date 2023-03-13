import styled from "styled-components";

export const ContainerItemBooks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  flex: 1;
  
  @media screen and (max-width: 1247px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 993px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 749px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 491px) {
    grid-template-columns: 1fr;
  }
`;