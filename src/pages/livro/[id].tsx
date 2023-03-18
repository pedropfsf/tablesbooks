import Head from "next/head";
import dynamic from "next/dynamic";

const ItemBook = dynamic(() => import("@/components/ItemBook"), {
  ssr: false
});

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import useTheme from "@/features/theme/useTheme";
import useFormatItemBook from "@/hooks/useRenderItemsBook";

export default function Book({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  const dataFormatted = useFormatItemBook(response?.data ?? {});

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
      <ContainerItemBooks>
        {
          dataFormatted?.map((item: any, index: number) => (
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

export async function getStaticPaths(context: any) {
  return {
    paths: [ `/livro/${context.params?.id}` ],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const response = await BooksApi.getById(context.params?.id);

  return {
    props: {
      response,
    }
  }
}