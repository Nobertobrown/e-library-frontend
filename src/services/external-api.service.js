import axios from "axios";
import { redirect } from "react-router-dom";
import localforage from "localforage";

const API_SERVER_URL = "http://localhost:8080";

/** Creates a user */
export const signup = async ({ request }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const result = await axios.put(`${API_SERVER_URL}/signup`, body, {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    throw result;
  }

  return redirect("/");
};

/** Logs in a user */
const postLoginData = async (data) => {
  const result = await axios.post(`${API_SERVER_URL}/login`, data, {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });

  if (result.status !== 200 && result.status !== 201) {
    throw result;
  }
  return result.data;
};

export const login = async ({ request }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const query = postLoginData(body);
  await localforage.setItem("loginData", query);
  return redirect("/catalogue/books");
};

/** Creates a book */
export const postBookData = async (data) => {
  const loginData = await localforage.getItem("loginData");
  const result = await axios.putForm(`${API_SERVER_URL}/admin/book`, data, {
    headers: { Authorization: "Bearer " + loginData.token },
  });
  if (result.status === 422) {
    throw new Error("Uploading failed!");
  }
  if (result.status !== 200 && result.status !== 201) {
    console.log("Error!");
    throw new Error("Could not upload book!");
  }
  return result.data;
};

/** Gets a specified book. */
export const booksQuery = () => ({
  queryKey: "getBooks",
  queryFn: async () => {
    const loginData = await localforage.getItem("loginData");
    const data = await axios.get(`${API_SERVER_URL}/catalogue/books`, {
      headers: { Authorization: "Bearer " + loginData.token },
    });
    return data;
  },
});

export const books_loader = (queryClient) => async () => {
  return (
    queryClient.getQueryData(booksQuery().queryKey) ??
    (await queryClient.fetchQuery(booksQuery()))
  );
};

/** Gets a specified book details. */
export const detailsQuery = (bookId) => ({
  queryKey: ["getDetails"],
  queryFn: async () => {
    const loginData = await localforage.getItem("loginData");
    const data = await axios.get(
      `${API_SERVER_URL}/catalogue/books/${bookId}`,
      {
        headers: { Authorization: "Bearer " + loginData.token },
      }
    );
    const details = data.data["book"];
    return details;
  },
});

export const books_details_loader = (queryClient) => async ({ params }) => {
    const query = detailsQuery(params.bookId);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

/** Downloads a book. */
export function downloadBook(bookId) {
  axios
    .get(`${API_SERVER_URL}/catalogue/books/${bookId}/download`, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then((response) => {
      const filename =
        response.headers["content-disposition"].split("filename=")[1];
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename + ".pdf"); //or any other extension
      link.click();
    })
    .catch((error) => console.log(error));
}
