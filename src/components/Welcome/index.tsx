import { memo } from "react";
import { 
  Container, 
  Illustration,
  Title
} from "./styles";

function Welcome() {
  return (
    <Container>
      <Illustration/>
      <Title>
        Sinta-se livre para pesquisar sobre qualquer livro que queira encontrar :)
      </Title>
    </Container>
  )
};

export default memo(Welcome);