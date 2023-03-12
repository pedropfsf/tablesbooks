import { InputHTMLAttributes } from "react";

import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";

import { Container, Field } from "./styles";

import colors from "@/styles/colors";

type FieldSearchProps = InputHTMLAttributes<HTMLInputElement> & {};

export default function FieldSearch({ ...props }: FieldSearchProps) {
  return (
    <Container>
      <Field
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