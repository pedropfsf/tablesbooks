import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import BooksApi from "@/api/BooksApi";

import Words from "@/utils/Words";

import useTheme from "@/hooks/useTheme";

export default function Books({ data }: any) {
  const { theme } = useTheme();
  console.log(data);

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
    </ContainerPageDefault>
  )
};

export async function getStaticProps() {
  const data = await BooksApi.getAllBooks({
    q: Words.generateRandom(),
  });

  return {
    props: {
      data,
    }
  }
}