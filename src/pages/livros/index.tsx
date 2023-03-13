import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import BooksApi from "@/api/BooksApi";

import Words from "@/utils/Words";

import useTheme from "@/hooks/useTheme";

export default function Books({ data }: any) {
  const { theme } = useTheme();
  console.log(data);

  return (
    <div>
      <Head>
        <title>tablebooks - Livros</title>
      </Head>
      <ContainerPageDefault theme={theme}>
        Livros
      </ContainerPageDefault>
    </div>
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