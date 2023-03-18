import { toast, ToastContainer } from "react-toastify";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ItemBook = dynamic(() => import("@/components/ItemBook"), {
  ssr: false
});

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import useTheme from "@/features/theme/useTheme";
import useFormatItemBook from "@/hooks/useFormatItemBook";
import useSearchValueRefresh from "@/hooks/useSearchValueRefresh";

export default function Books({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  const dataFormatted = useFormatItemBook(response?.data ?? {});

  useSearchValueRefresh();

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
    paths: [ `/livros/${context.query?.search_value}` ],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  try {
    const searchValueRoute = context.params?.search_value;

    const data = await BooksApi.getAllBooks({
      q: searchValueRoute ?? "",
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