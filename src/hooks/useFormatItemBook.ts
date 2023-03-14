import Words from "@/utils/Words";

export default function useFormatItemBook(data: any) {
  return data?.items?.map((item: any) => {
    const { title, description } = item.volumeInfo;
    
    const imageSrc = item.volumeInfo?.imageLinks?.thumbnail;
    
    return {
      imageSrc, 
      title,
      description: Words.setLimitString(description),
    }
  });
};