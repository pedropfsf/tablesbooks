import { useMemo } from "react";
import Head from "next/head";

import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import BooksApi from "@/api/BooksApi";
import useTheme from "@/features/theme/useTheme";
import useMessageErrorEffect from "@/hooks/useMessageErrorEffect";
import useMediaQuerie from "@/hooks/useMediaQuerie";
import BookDetails from "@/components/BookDetails";
import Descriptions from "@/components/Descriptions";
import ReplaceString from "@/utils/ReplaceString";
import ContainerDetailsBook from "@/elements/ContainerDetailsBook";
import TitleDetailsBook from "@/elements/TitleDetailsBook";
import Box from "@/elements/Box";

export default function Book({ pageProps: { response }}: any) {
  const { theme } = useTheme();
  const data = useMemo(() => response?.data, [response]);
  const informationBook = useMemo(() => response?.data?.volumeInfo, [response]);

  const matches = useMediaQuerie("390px");

  useMessageErrorEffect("error", {
    isError: data?.isError,
    message: data?.message,
  });

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>{informationBook?.title}</title>
      </Head>
      <ContainerDetailsBook>
        <BookDetails
          theme={theme}
          title={informationBook?.title}
          authors={informationBook?.authors ?? []}
          publishingCompany={informationBook?.publisher}
          imageSrc={informationBook?.imageLinks?.thumbnail}
          canonicalVolumeLink={informationBook?.canonicalVolumeLink}
        />
        <Box 
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="start"
          padding={matches ? "25px 0 0 0" : "48px"}
          gap="32px"
        >
          <TitleDetailsBook theme={theme}>
            {informationBook?.title}
          </TitleDetailsBook>
          <Descriptions
            theme={theme}
            items={[
              {
                label: "Descrição",
                value: ReplaceString.removeTags(informationBook?.description ?? ""),
              },
              {
                label: "Data de publicação",
                value: informationBook?.publishedDate,
              },
              {
                label: "Categoria",
                value: informationBook?.categories?.join(", "),
              },
              {
                label: "Idioma",
                value: informationBook?.language,
              },
            ]}
          />
        </Box>
      </ContainerDetailsBook>
    </ContainerPageDefault>
  )
};

export async function getStaticPaths(context: any) {
  const id = context.params?.id;
  
  return {
    paths: id ? [ { params: { id } } ] : [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const response = await BooksApi.getById(context.params?.id ?? "");

  return {
    props: {
      response,
    }
  }
}