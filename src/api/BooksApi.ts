import api from "./service"

import Request from "@/utils/Request";

type getAllBooksProps = {
  q?: string;
}

class BooksApi {
  static async getAllBooks({ ...props }: getAllBooksProps = {}) {
    try {
      const querys = Request.generateQuerysDynamic(props);
      
      const queryKeyGoogleApi = Request.applyQuery({
        key: "key",
        value: process.env.KEY_API_GOOGLE ?? "",
        flag: "?",
      })

      const response = await api.get(`/volumes${queryKeyGoogleApi}${querys}`);

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

  static async getById(id: string) {
    try {      
      const queryKeyGoogleApi = Request.applyQuery({
        key: "key",
        value: process.env.KEY_API_GOOGLE ?? "",
        flag: "?",
      })

      const response = await api.get(`/volumes/${id ?? ""}${queryKeyGoogleApi}`);

      return {
        message: "",
        isError: false,
        data: response.data,
      }

    } catch (error) {
      console.log(error);
      return {
        message: "Problemas ao buscar os dados do livro em específico",
        isError: true,
        data: error,
      }
    }
  }
};

export default BooksApi;
