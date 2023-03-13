import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import Welcome from "@/components/Welcome";

import useTheme from "@/hooks/useTheme";

export default function Home() {
  const theme = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>tablebooks</title>
      </Head>
      <Welcome/>
    </ContainerPageDefault>
  )
}
