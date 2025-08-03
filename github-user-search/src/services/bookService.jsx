import API from "./api";

export const getBooks = async () => {
  const response = await API.get("books/");
  return response.data;
};

export const createBook = async (book) => {
  const response = await API.post("books/", book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await API.delete(`books/${id}/`);
  return response.data;
};
