import styled from "styled-components";

const ContainerDetailsBook = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  padding: 24px;
  
  @media screen and (max-width: 724px) {
    flex-direction: column;
    align-items: center;

    padding: 0;
  }
`;

export default ContainerDetailsBook;