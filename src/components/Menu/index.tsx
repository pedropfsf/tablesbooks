import { useCallback } from "react";
import { useRouter } from "next/router";

import { Home } from "@styled-icons/fluentui-system-filled/Home";
import { BookAlt } from "@styled-icons/boxicons-solid/BookAlt";

import { Container } from "./styles";

import IconMenu from "../IconMenu";

import IconTheme from "../IconTheme";

import useTheme from "@/features/theme/useTheme";

export default function Menu() {
  const router = useRouter();
  const { theme } = useTheme();

  const nextPage = useCallback((route?: string) => {
    return () => {
      router.push(`/${route ?? ""}`)
    }
  }, []);

  return (
    <Container>
      <IconMenu
        Icon={Home}
        theme={theme}
        nameRoute="/"
        onClick={nextPage()}
      />
      <IconMenu
        Icon={BookAlt}
        theme={theme}
        nameRoute="/livros"
        onClick={nextPage("livros")}
      />

      <IconTheme/>
    </Container>
  )
}