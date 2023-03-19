import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import MessageIllustration from "@/components/MessageIllustration";

import useTheme from "@/features/theme/useTheme";

export default function Home() {
  const {theme} = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <MessageIllustration 
        theme={theme}
        src="/images/svgs/illustration-not-selected-book.svg"
        alt="De uma mulher do lado de uma bolinha de carregamento e atrás de uma caixa branca"
        message="Nenhum livro para ser visualizado :(" 
      />
    </ContainerPageDefault>
  )
}
