import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <ContainerPageDefault>
      <Head>
        <title>tablebooks</title>
      </Head>
      <Welcome/>
    </ContainerPageDefault>
  )
}
