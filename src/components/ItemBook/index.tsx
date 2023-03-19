import { useRouter } from "next/router";

import { BookAlt as BookLink } from "@styled-icons/boxicons-solid/BookAlt";
import { Amazon } from "@styled-icons/boxicons-logos/Amazon";
import { RightArrowSquare } from "@styled-icons/boxicons-solid/RightArrowSquare";

import IconCustomized from "../IconCustomized";

import BookImage from "../BookImage";

import { 
  Container, 
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

  return (
    <Container theme={theme} key={keyElement}>
      <BookImage
        theme={theme}
        title={title}
        imageSrc={imageSrc}
      />
      <Title theme={theme}>
        {title}
      </Title>
      <Description theme={theme}>
        {description}
      </Description>
      <Buttons>
        <ButtonsLeft>
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