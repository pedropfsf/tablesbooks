import { useCallback } from "react";
import { useRouter } from "next/router";

import { Home } from "@styled-icons/fluentui-system-filled/Home";
import { Books } from "@styled-icons/icomoon/Books";
import { BookAlt } from "@styled-icons/boxicons-solid/BookAlt";

import { Container } from "./styles";

import IconMenu from "../IconMenu";

import IconTheme from "../IconTheme";

import useTheme from "@/features/theme/useTheme";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";

export default function Menu() {
  const router = useRouter();
  const { theme } = useTheme();
  const { idSaved } = useSearchBooks();

  const nextPage = useCallback((route?: string) => {
    return () => {
      router.push(`/${route ?? ""}`)
    }
  }, [router]);

  return (
    <Container>
      <IconMenu
        Icon={Home}
        theme={theme}
        nameRoute=""
        onClick={nextPage()}
      />
      <IconMenu
        Icon={Books}
        theme={theme}
        nameRoute="livros"
        onClick={nextPage("livros")}
      />
      <IconMenu
        Icon={BookAlt}
        theme={theme}
        nameRoute="livro"
        onClick={nextPage(`livro/${idSaved}`)}
        isVisible={Boolean(idSaved)}
      />
      <IconTheme/>
    </Container>
  )
}