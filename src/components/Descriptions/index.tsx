import { ThemeTyperComponent } from "@/utils/Theme";
import { 
  Container, 
  Description, 
  Information, 
  Title 
} from "./styles";

type Item = {
  label: string;
  value: string;
}

type DescriptionsProps = ThemeTyperComponent & {
  items: Item[];
}

export default function Descriptions({ items, theme }: DescriptionsProps) {
  return (
    <Container>
      {items?.map(({label, value}, index: number) => value && (
        <Description key={index}>
          <Title theme={theme}>
            {label}
          </Title>
          <Information theme={theme}>
            {value}
          </Information>
        </Description>
      ))}
    </Container>
  );
}