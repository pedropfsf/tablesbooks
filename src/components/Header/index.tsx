import { useEffect } from "react";
import { useRouter } from "next/router";

import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

import useTheme from "@/features/theme/useTheme";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";
import Timer from "@/utils/Timer";
import Words from "@/utils/Words";

export default function Header() {
  const router = useRouter();
  const { theme } = useTheme();
  const { handleSetCurrentSearch, currentSearch } = useSearchBooks();

  useEffect(() => {
    if (Words.getIsSpace(currentSearch)) {
      return;
    }

    Timer.applyDelay(() => {
      router.push(`/livros/${Words.removeSpaceStartEnd(currentSearch)}`);
    });
  }, [currentSearch]);

  return (
    <Container theme={theme}>
      <FieldSearch 
        theme={theme}
        value={currentSearch}
        onChange={handleSetCurrentSearch}
      />
      <Menu/>
    </Container>
  )
}