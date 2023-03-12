import Head from "next/head";
import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

export default function Home() {
  return (
    <div>
      <Head>
        <title>tablebooks</title>
      </Head>
      <ContainerPageDefault>
        Main
      </ContainerPageDefault>
    </div>
  )
}
