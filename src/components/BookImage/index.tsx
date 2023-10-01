import colors from "@/styles/colors";
import { BookAlt } from "@styled-icons/boxicons-regular/BookAlt";
import { ImageBook } from "./styles";

type BookImageProps = {
  theme?: "light" | "dark";
  imageSrc?: string;
  title: string;
};

export default function BookImage({ theme, imageSrc, title }: BookImageProps) {
  function getColor() {
    if (theme === "light") {
      return colors.black;
    }
    return colors.white;
  }

  if (imageSrc) {
    return <ImageBook src={imageSrc} alt={`Imagem do livro "${title}"`} />;
  }

  return <BookAlt size={200} color={getColor()} />;
}
