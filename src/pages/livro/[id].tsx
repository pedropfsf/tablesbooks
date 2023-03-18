import Head from "next/head";
import dynamic from "next/dynamic";

const ItemBook = dynamic(() => import("@/components/ItemBook"), {
  ssr: false
});

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import BooksApi from "@/api/BooksApi";
import useTheme from "@/features/theme/useTheme";

export default function Book({ pageProps: { response }}: any) {
  const { theme } = useTheme();

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>{response.data.volumeInfo.title}</title>
      </Head>
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