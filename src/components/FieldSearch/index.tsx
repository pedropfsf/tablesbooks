import { InputHTMLAttributes } from "react";

import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";

import { Container, Field } from "./styles";

import colors from "@/styles/colors";

type FieldSearchProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "light" | "dark"
};

export default function FieldSearch({ theme, ...props }: FieldSearchProps) {
  return (
    <Container color={theme === "light" ? colors.black : colors.white}>
      <Field
        color={theme === "light" ? colors.black : colors.white}
        placeholder="Pesquise livros..."
        {...props}
      />
      <SearchOutline
        size={24}
        color={colors.red}
      />
    </Container>
  )
};