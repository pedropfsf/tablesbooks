import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import Welcome from "@/components/Welcome";

import useTheme from "@/features/theme/useTheme";

export default function Home() {
  const {theme} = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <Welcome theme={theme}/>
    </ContainerPageDefault>
  )
}
