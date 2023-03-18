import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container } from "./styles";

import Menu from "../Menu";
import FieldSearch from "../FieldSearch";

import useTheme from "@/features/theme/useTheme";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";
import useSearchValueRefresh from "@/hooks/useSearchValueRefresh";

export default function Header() {
  const { theme } = useTheme();
  const { handleSetCurrentSearch, currentSearch, loading } = useSearchBooks();
  
  useSearchValueRefresh();

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