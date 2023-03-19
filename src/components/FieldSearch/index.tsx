import { InputHTMLAttributes } from "react";

import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";

import { 
  Container, 
  Field, 
} from "./styles";

import colors from "@/styles/colors";

import Spinner from "../Spinner";

type FieldSearchProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "light" | "dark";
  loading?: boolean;
};

export default function FieldSearch({ theme, loading, ...props }: FieldSearchProps) {
  return (
    <Container color={theme === "light" ? colors.black : colors.white}>
      <Field
        color={theme === "light" ? colors.black : colors.white}
        placeholder="Pesquise livros..."
        {...props}
      />
      {
        loading
        ?
          <Spinner
            size="24px"
          />
        :
        <SearchOutline
          size={24}
          color={colors.red}
        />
      }
    </Container>
  )
};