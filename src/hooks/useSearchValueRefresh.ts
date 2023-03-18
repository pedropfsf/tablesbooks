import { useRouter } from "next/router";
import { useEffect } from "react";

import useSearchBooks from "@/features/searchBooks/useSearchBooks";
import Words from "@/utils/Words";
import Timer from "@/utils/Timer";

export default function useSearchValueRefresh() {
  const router = useRouter();

  const { 
    currentSearch, 
    onEnableLoading, 
    onDisableLoading 
  } = useSearchBooks();

  useEffect(() => {

    if (Words.getIsSpace(currentSearch)) {
      return;
    }

    onEnableLoading();

    const search_value = Words.removeSpaceStartEnd(currentSearch);

    Timer.applyDelay(() => {
      router.push(`/livros/${search_value}`);
      onDisableLoading();
    });
  }, [currentSearch]);
};