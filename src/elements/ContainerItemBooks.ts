import styled from "styled-components";

export const ContainerItemBooks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  flex: 1;
  
  @media screen and (max-width: 1274px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1028px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 784px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;