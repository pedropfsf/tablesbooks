import { useCallback } from "react";
import { useRouter } from "next/router";

import { Home } from "@styled-icons/fluentui-system-filled/Home";
import { BookAlt } from "@styled-icons/boxicons-solid/BookAlt";

import { Container } from "./styles";

import IconMenu from "../IconMenu";

export default function Menu() {
  const router = useRouter();

  const nextPage = useCallback((route?: string) => {
    return () => {
      router.push(`/${route ?? ""}`)
    }
  }, []);

  return (
    <Container>
      <IconMenu
        Icon={Home}
        nameRoute="/"
        onClick={nextPage()}
      />
      <IconMenu
        Icon={BookAlt}
        nameRoute="/livros"
        onClick={nextPage("livros")}
      />
    </Container>
  )
}