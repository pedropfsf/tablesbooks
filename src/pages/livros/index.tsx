import Head from "next/head";
import { useMemo } from "react";

import ItemBook from "@/components/ItemBook";
import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import Words from "@/utils/Words";
import useTheme from "@/features/theme/useTheme";

export default function Books({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  const dataFormatted = useMemo(() => {
    return response.data.items.map((item: any, index: number) => {
      const { title, description } = item.volumeInfo;
      
      const imageSrc = item.volumeInfo?.imageLinks?.thumbnail;
      
      return {
        imageSrc, 
        title,
        description: Words.setLimitString(description),
        keyElement: index,
      }
    })
  }, [response.data.items]);
  
  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
      <ContainerItemBooks>
        {
          dataFormatted.map((item: any, index: any) => (
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