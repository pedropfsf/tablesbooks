import { useMemo } from "react";

import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";

import colors from "@/styles/colors";

import { ImageBook } from "./styles";

type BookImageProps = {
  theme?: "light" | "dark";
  imageSrc?: string; 
  title: string; 
}

export default function BookImage({ 
  theme, 
  imageSrc, 
  title, 
}: BookImageProps) {
  const colorWithTheme = useMemo(() => (
    theme === "light" ? colors.black : colors.white
  ), [theme]);

  if (imageSrc) {
    return (
      <ImageBook
        src={imageSrc}
        alt={`Imagem do livro "${title}"`}
      />
    )
  } 
    
  return (
    <BookAlt
      size={200}
      color={colorWithTheme}
    />
  )
}