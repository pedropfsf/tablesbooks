import { useMemo } from "react";
import { useRouter } from "next/router";

import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { BookAlt as BookLink } from "@styled-icons/boxicons-solid/BookAlt";
import { Amazon } from "@styled-icons/boxicons-logos/Amazon";
import { RightArrowSquare } from "@styled-icons/boxicons-solid/RightArrowSquare";

import IconCustomized from "../IconCustomized";

import colors from "@/styles/colors";

import { 
  Container, 
  ImageBook,
  Description,
  Title,
  Buttons,
  ButtonsLeft
} from "./styles";

type ItemBookProps = {
  id: string;
  theme: "light" | "dark";
  imageSrc?: string; 
  title: string; 
  description: string; 
  keyElement?: number;
  linkBook: string;
  linkGoogleSearch: string;
  linkAmazonSearch: string;
  onBookEnter?: (id: string) => void;
}

export default function ItemBook({ 
  id,
  theme, 
  imageSrc, 
  title, 
  description, 
  keyElement, 
  linkBook, 
  linkGoogleSearch,
  linkAmazonSearch,
  onBookEnter
}: ItemBookProps) {
  const router = useRouter();

  const imageItemBook = useMemo(() => {
    if (imageSrc) {
      return (
        <ImageBook
          src={imageSrc}
          alt={`Imagem do livro "${title}"`}
        />
      )
    } else {
      const colorWithTheme = theme === "light" ? colors.black : colors.white;

      return (
        <BookAlt
          size={200}
          color={colorWithTheme}
        />
      )
    }
  }, [
    imageSrc,
    colors,
    theme,
    title,
  ])

  return (
    <Container theme={theme} key={keyElement}>
      {imageItemBook}
      <Title theme={theme}>
        {title}
      </Title>
      <Description theme={theme}>
        {description}
      </Description>
      <Buttons>
        <ButtonsLeft>
          <IconCustomized
            Icon={Google}
            theme={theme}
            title="Link do livro na busca do google"
            onClick={() => window.open(linkGoogleSearch)}
          />
          <IconCustomized
            Icon={BookLink}
            theme={theme}
            title="Link do livro no Google Livros"
            onClick={() => window.open(linkBook)}
          />
          <IconCustomized
            Icon={Amazon}
            theme={theme}
            title="Link do livro na busca da amazon"
            onClick={() => window.open(linkAmazonSearch)}
          />
        </ButtonsLeft>
        <IconCustomized
          Icon={RightArrowSquare}
          theme={theme}
          isActivePermanent={true}
          title="Ver o livro"
          onClick={() => {
            if (onBookEnter) {
              onBookEnter(id);
            }

            router.push(`/livro/${id}`);
          }}
          size={32}
        />
      </Buttons>
    </Container>
  )
}