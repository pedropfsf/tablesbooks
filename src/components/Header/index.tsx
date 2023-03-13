import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

import useTheme from "@/hooks/useTheme";

export default function Header() {
  const { theme } = useTheme();
  
  console.log(theme);

  return (
    <Container theme={theme}>
      <FieldSearch theme={theme}/>
      <Menu/>
    </Container>
  )
}