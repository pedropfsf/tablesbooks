import { memo } from "react";

import { 
  Container, 
  Illustration,
  Title,
} from "./styles";

import { ThemeTyperComponent } from "@/utils/Theme";

type MessageIllustrationProps = ThemeTyperComponent & {
  src: string;
  alt: string;
  message: string;
};

function MessageIllustration({ 
  theme,
  src,
  alt,
  message
}: MessageIllustrationProps) {
  return (
    <Container>
      <Illustration
        src={src}
        alt={alt}
        theme={theme}
      />
      <Title theme={theme}>
        {message}
      </Title>
    </Container>
  )
};

export default memo(MessageIllustration);