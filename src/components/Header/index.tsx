import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

import useTheme from "@/features/theme/useTheme";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";

export default function Header() {
  const { theme } = useTheme();
  const { handleSetCurrentSearch, searchBooks } = useSearchBooks();
  
  console.log(searchBooks);

  return (
    <Container theme={theme}>
      <FieldSearch 
        theme={theme}
        value={searchBooks}
        onChange={handleSetCurrentSearch}
      />
      <Menu/>
    </Container>
  )
}