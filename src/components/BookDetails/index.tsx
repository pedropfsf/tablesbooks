import { memo } from "react";

import { BookAlt as BookLink } from "@styled-icons/boxicons-solid/BookAlt";
import { Amazon } from "@styled-icons/boxicons-logos/Amazon";

import Box from "@/elements/Box";

import { Container, Text, Lines } from "./styles";

import BookImage from "../BookImage";
import IconCustomized from "../IconCustomized";

type BookDetailsProps = {
  title: string;
  imageSrc: string;
  authors: string[];
  publishingCompany: string;
  theme?: "light" | "dark";
  canonicalVolumeLink?: string;
};

function BookDetails({
  title,
  imageSrc,
  authors,
  publishingCompany,
  theme,
  canonicalVolumeLink,
}: BookDetailsProps) {
  return (
    <Container>
      <Lines theme={theme}>
        <BookImage theme={theme} imageSrc={imageSrc} title={title} />
      </Lines>
      <Text theme={theme}>
        <strong>Autores:</strong> {authors.join(", ")}
      </Text>
      <Text theme={theme}>
        <strong>Editora:</strong> {publishingCompany}
      </Text>
      <Box justifyContent="flex-start">
        <IconCustomized
          Icon={BookLink}
          theme={theme}
          title="Link do livro no Google Livros"
          onClick={() => window.open(canonicalVolumeLink)}
        />
        <IconCustomized
          Icon={Amazon}
          theme={theme}
          title="Link do livro na busca da amazon"
          onClick={() => window.open(`https://www.amazon.com.br/s?k=${title}`)}
        />
      </Box>
    </Container>
  );
}

export default memo(BookDetails);
