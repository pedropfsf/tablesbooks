import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import BooksApi from "@/api/BooksApi";

import Words from "@/utils/Words";

export default function Books({ data }: any) {
  console.log(data);

  return (
    <div>
      <Head>
        <title>tablebooks - Livros</title>
      </Head>
      <ContainerPageDefault>
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