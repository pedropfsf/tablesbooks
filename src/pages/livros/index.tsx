import Head from "next/head";
import dynamic from "next/dynamic";

const ItemBook = dynamic(() => import("@/components/ItemBook"), {
  ssr: false
});

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
          dataFormatted.map((item: any, index: number) => (
            <ItemBook 
              theme={theme} 
              key={index}
              {...item}
            />
          ))
        }
      </ContainerItemBooks>
    </ContainerPageDefault>
  )
};

export async function getStaticProps(context: any) {
  try {
    const data = await BooksApi.getAllBooks({
      q: context.query?.search_value ?? Words.generateRandom(),
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