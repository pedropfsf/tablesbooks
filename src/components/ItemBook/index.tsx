import { useMemo } from "react";

import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";

import colors from "@/styles/colors";

import IconBookSvg from "../../../public/images/svgs/icon-book.svg"

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
  category?: string; 
  publishedDate?: string; 
  authors?: string;
}

export default function ItemBook({ theme, imageSrc, title, description, category, publishedDate, authors}: ItemBookProps) {
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
    <Container>
      {imageItemBook}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}