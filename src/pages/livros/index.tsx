import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";

import ItemBook from "@/components/ItemBook";
import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import Words from "@/utils/Words";
import useTheme from "@/features/theme/useTheme";
import useFormatItemBook from "@/hooks/useFormatItemBook";

export default function Books({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  
  const dataFormatted = useFormatItemBook(response.data);
  
  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
      <ContainerItemBooks>
        {
          dataFormatted.map((item: any) => (
            <ItemBook 
              theme={theme} 
              {...item}
            />
          ))
        }
      </ContainerItemBooks>
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