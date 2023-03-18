import Words from "@/utils/Words";

export default function useRenderItemsBook(data: any) {
  return data?.items?.map((item: any) => {
    const { title, description, canonicalVolumeLink } = item.volumeInfo;
    
    const imageSrc = item.volumeInfo?.imageLinks?.thumbnail;
    
    return {
      id: item.id,
      imageSrc, 
      title,
      description: Words.setLimitString(description),
      linkBook: canonicalVolumeLink,
      linkGoogleSearch: `https://www.google.com/search?q=${title}`,
      linkAmazonSearch: `https://www.amazon.com.br/s?k=${title}`,
    }
  });
};