import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignUpPage from "./routes/Auth/SignUp";
import Index from "./routes/index";
import ErrorPage from "./components/ErrorHandler/error-page";
import Catalogue, { loader as booksLoader } from "./routes/Lib/Catalogue";
import DetailCard, { loader as detailsLoader } from "./routes/Lib/DetailCard";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "catalogue/books",
            element: <Catalogue />,
            loader: booksLoader(queryClient),
            // action: contactAction,
          },
          {
            path: "catalogue/books/:bookId",
            element: <DetailCard />,
            loader: detailsLoader(queryClient),
            // action: editAction,
          },
          // {
          //   path: "contacts/:contactId/destroy",
          //   action: destroyAction,
          // },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
