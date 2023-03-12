import api from "./service"

class BooksApi {
  static async getAllBooks() {
    try {
      const response = await api.get("/search.json?q=python", {
        headers: {
          "Origin": "https://www.example.com"
        }
      });

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
