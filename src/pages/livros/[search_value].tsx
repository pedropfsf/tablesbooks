import Head from "next/head";
import dynamic from "next/dynamic";

const ItemBook = dynamic(() => import("@/components/ItemBook"), {
  ssr: false
});

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import useTheme from "@/features/theme/useTheme";
import useRenderItemsBook from "@/hooks/useRenderItemsBook";
import useMessageErrorEffect from "@/hooks/useMessageErrorEffect";
import useSearchBooks from "@/features/searchBooks/useSearchBooks";

export default function ResearchedBooks({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  const items = useRenderItemsBook(response?.data ?? {});
  const { setCurrentIdSaved } = useSearchBooks();

  useMessageErrorEffect("error", {
    isError: response?.data?.isError,
    message: response?.data?.message,
  });

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
      <ContainerItemBooks>
        {
          items?.map((item: any, index: number) => (
            <ItemBook 
              theme={theme} 
              key={index}
              onBookEnter={id => setCurrentIdSaved(id)}
              {...item}
            />
          ))
        }
      </ContainerItemBooks>
    </ContainerPageDefault>
  )
};

export async function getStaticPaths(context: any) {
  const search_value = context.params?.search_value;
  
  return {
    paths: search_value ? [{ params: { search_value } }] : [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const searchValueRoute = context.params?.search_value;

  const response = await BooksApi.getAllBooks({
    q: searchValueRoute ?? "",
  });

  return {
    props: {
      response,
    }
  }
}