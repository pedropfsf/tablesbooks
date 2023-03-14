import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

import useTheme from "@/features/theme/useTheme";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";
import Timer from "@/utils/Timer";
import Words from "@/utils/Words";
import Request from "@/utils/Request";

export default function Header() {
  const router = useRouter();
  const { theme } = useTheme();
  const { handleSetCurrentSearch, currentSearch } = useSearchBooks();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (Words.getIsSpace(currentSearch)) {
      return;
    }

    setLoading(true);
    
    const querySearchValue = Request.applyQuery({
      key: "search_value",
      value: Words.removeSpaceStartEnd(currentSearch),
      flag: "?"
    })
    
    Timer.applyDelay(() => {
      router.push(`/livros${querySearchValue}`);
      setLoading(false);
    });
    
  }, [currentSearch]);

  return (
    <Container theme={theme}>
      <FieldSearch 
        theme={theme}
        value={currentSearch}
        onChange={handleSetCurrentSearch}
        loading={loading}
      />
      <Menu/>
    </Container>
  )
}