import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignUpPage from "./routes/Auth/SignUp";
import MiniDrawer from "./components/Drawer/MiniDrawer";
import ErrorPage from "./components/ErrorHandler/error-page";
import Catalogue, { loader as booksLoader } from "./routes/User/Catalogue";
import DetailCard, { loader as detailsLoader } from "./routes/User/DetailCard";
import { action as signUpAction } from "./routes/Auth/SignUp";
import { action as loginAction } from "./routes/Auth/Login";
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
            path: "/signup",
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            index: true,
            element: <LoginPage />,
            action: loginAction,
          },
          {
            path: "/upload",
            element: <UploadPage />,
            // action: uploadAction
          },
          {
            path: "catalogue/books",
            element: <MiniDrawer />,
            children: [
              {
                index: true,
                element: <Catalogue />,
                loader: booksLoader(queryClient),
                // action: contactAction,
              },
              {
                path: ":bookId",
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
