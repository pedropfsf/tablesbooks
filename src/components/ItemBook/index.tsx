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
}

export default function ItemBook({ theme, imageSrc, title, description }: ItemBookProps) {
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
    <Container theme={theme}>
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