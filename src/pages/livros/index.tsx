import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";

import BooksApi from "@/api/BooksApi";
// import { useEffect } from "react";

export default function Books({ data }: any) {
  console.log(data);
  // useEffect(() => {
  //   BooksApi.getAllBooks()
  //     .then(data => console.log(data));
  // }, [])

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
  const data = await BooksApi.getAllBooks();

  return {
    props: {
      data,
    }
  }
}