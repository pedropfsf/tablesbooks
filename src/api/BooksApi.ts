import api from "./service"

import Request from "@/utils/Request";

type getAllBooksProps = {
  q?: string;
}

class BooksApi {
  static async getAllBooks({ ...props }: getAllBooksProps = {}) {
    try {
      const querys = Request.generateQuerysDynamic(props);
      
      const response = await api.get(`/volumes?key=${process.env.KEY_API_GOOGLE}${querys}`);

      return {
        message: "",
        isError: false,
        data: response.data,
      }

    } catch (error) {
      console.log(error);
      return {
        message: "Problemas ao buscar os dados de livros",
        isError: true,
        data: error,
      }
    }
  }
};

export default BooksApi;
