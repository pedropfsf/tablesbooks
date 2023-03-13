import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import BooksApi from "@/api/BooksApi";
import Words from "@/utils/Words";
import useTheme from "@/features/theme/useTheme";

export default function Books({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  console.log(response.data.items);
  
  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
    </ContainerPageDefault>
  )
};

export async function getStaticProps() {
  try {
    const data = await BooksApi.getAllBooks({
      q: Words.generateRandom(),
    });
  
    return {
      props: {
        response: data,
      }
    }
  } catch (error) {
    return {
      props: {
        response: error,
      }
    }
  }
}