import { memo } from "react";
import { 
  Container, 
  Illustration,
  Title,
  TitleProps
} from "./styles";

type WelcomeProps = TitleProps & {};

function Welcome({ theme }: WelcomeProps) {
  return (
    <Container>
      <Illustration/>
      <Title theme={theme}>
        Sinta-se livre para pesquisar sobre qualquer livro que queira encontrar :)
      </Title>
    </Container>
  )
};

export default memo(Welcome);