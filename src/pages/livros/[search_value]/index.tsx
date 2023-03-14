import Head from "next/head";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import ItemBook from "@/components/ItemBook";
import { ContainerPageDefault } from "@/elements/ContainerPageDefault";
import { ContainerItemBooks } from "@/elements/ContainerItemBooks";
import BooksApi from "@/api/BooksApi";
import Words from "@/utils/Words";
import useTheme from "@/features/theme/useTheme";
import useFormatItemBook from "@/hooks/useFormatItemBook";

import LoadingSpin from "react-loading-spin";
import colors from "@/styles/colors";

export default function Books() {
  const router: any = useRouter();
  const { theme } = useTheme();
  const [responseData, setResponseData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const dataFormatted = useFormatItemBook(responseData);
  
  const fetchBooksPerSearch = useCallback(async () => {
    try {
      setLoading(true);

      const responseData = await BooksApi.getAllBooks({
        q: router.query?.search_value ?? "",
      });

      setResponseData(responseData.data);

    } catch (error) {
      toast("Não foi possível buscar os livros", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });

    } finally {
      setLoading(false);
    }
  }, [
    router,
    setLoading,
    setResponseData,
    BooksApi
  ]);

  useEffect(() => {
    fetchBooksPerSearch();
  }, [router.query?.search_value]);

  return (
    <ContainerPageDefault theme={theme}>
      <Head>
        <title>Tablebooks - Livros</title>
      </Head>
      { 
        loading
        && 
        <>
          <br/>
          <br/>
          <br/>
          <br/>
          <LoadingSpin
            size="100px"
            primaryColor={colors.red}
          />
        </> 
      }
      <ContainerItemBooks>
        {
          dataFormatted?.map((item: any) => (
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