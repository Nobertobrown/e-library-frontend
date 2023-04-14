import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Index from "./routes/index";
import SignUpPage from "./routes/Auth/SignUp";
import MiniDrawer from "./components/Drawer/MiniDrawer";
import ErrorPage from "./components/ErrorHandler/error-page";
import Catalogue, { loader as booksLoader } from "./routes/User/Catalogue";
import DetailCard, { loader as detailsLoader } from "./routes/User/DetailCard";
import { action as signUpAction } from "./routes/Auth/SignUp";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LoginPage from "./routes/Auth/Login";
import UploadPage from "./routes/Admin/Upload";

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
            path: "catalogue",
            element: <MiniDrawer />,
            children: [
              {
                index: true,
                element: <Index />,
              },
              {
                path: "books",
                element: <Catalogue />,
                loader: booksLoader(queryClient),
                // action: contactAction,
              },
              {
                path: "books/:bookId",
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
          {
            path: "/signup",
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/upload",
            element: <UploadPage />,
          },
        ],
      },
    ],
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
