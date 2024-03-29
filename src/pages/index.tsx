import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import useTheme from "@/features/theme/useTheme";
import MessageIllustration from "@/components/MessageIllustration";

export default function Home() {
  const {theme} = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <MessageIllustration 
        theme={theme}
        src="/images/svgs/illustration-welcome.svg"
        alt="Ilustração de uma pessoa passando página de um livro gigante"
        message="Sinta-se livre para pesquisar sobre qualquer livro que queira encontrar :)" 
      />
    </ContainerPageDefault>
  )
}
