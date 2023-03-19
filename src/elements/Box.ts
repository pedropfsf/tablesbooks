import styled from "styled-components";

type BoxProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  gap?: string;
}

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? "row"};
  justify-content: ${props => props.justifyContent ?? "center"};
  align-items: ${props => props.alignItems ?? "center"};
  gap: ${props => props.gap ?? "0"};

  padding: ${props => props.padding ?? "0"};
`;

export default Box;