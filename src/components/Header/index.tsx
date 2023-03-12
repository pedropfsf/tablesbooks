import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

export default function Header() {
  return (
    <Container>
      <FieldSearch/>
      <Menu/>

      
    </Container>
  )
}