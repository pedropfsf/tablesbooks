import Words from "@/utils/Words";

export default function useFormatItemBook(data: any) {
  return data?.items?.map((item: any) => {
    const { title, description, canonicalVolumeLink } = item.volumeInfo;
    
    const imageSrc = item.volumeInfo?.imageLinks?.thumbnail;
    
    return {
      imageSrc, 
      title,
      description: Words.setLimitString(description),
      linkBook: canonicalVolumeLink,
      linkGoogleSearch: `https://www.google.com/search?q=${title}`,
      linkAmazonSearch: `https://www.amazon.com.br/s?k=${title}`,
    }
  });
};