import { useMemo } from "react";

import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";

import colors from "@/styles/colors";

import { 
  Container, 
  ImageBook,
  Description,
  Title
} from "./styles";

type ItemBookProps = {
  theme: "light" | "dark";
  imageSrc?: string; 
  title: string; 
  description: string; 
  keyElement?: number;
}

export default function ItemBook({ theme, imageSrc, title, description, keyElement }: ItemBookProps) {
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
    </Container>
  )
}