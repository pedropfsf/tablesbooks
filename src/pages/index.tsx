import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import Welcome from "@/components/Welcome";

import useTheme from "@/features/theme/useTheme";

export default function Home() {
  const {theme} = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <link rel="icon" type="image/png" href="/images/svgs/logo-tablebooks.png"/>
        <title>Tablebooks</title>
      </Head>
      <Welcome theme={theme}/>
    </ContainerPageDefault>
  )
}
