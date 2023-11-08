import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "./react-query-client";

import { user_role_loader as roleLoader } from "../services/internal-api.service";
import { books_loader as booksLoader } from "../services/external-api.service";
import { books_details_loader as detailsLoader } from "../services/external-api.service";

import { signup as signUpAction } from "../services/external-api.service";
import { login as loginAction } from "../services/external-api.service";

import MiniDrawer from "../components/Drawer/MiniDrawer";
import ErrorPage from "../components/ErrorHandler/error-page";
import PdfViewer from "../components/PdfViewer/PdfViewer";

import DetailCard from "../pages/User/DetailCard";
import Catalogue from "../pages/User/Catalogue";
import LoginPage from "../pages/Auth/Login";
import SignUpPage from "../pages/Auth/SignUp";
import UploadPage from "../pages/Admin/Upload";

export const router = createBrowserRouter([
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
            loader: roleLoader,
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
          {
            path: ":bookId/read",
            element: <PdfViewer />,
          },
        ],
      },
    ],
  },
]);
