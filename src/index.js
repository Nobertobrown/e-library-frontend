import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import theme from "./utilities/theme";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {router} from "./utilities/browser-router"
import { queryClient } from "./utilities/react-query-client";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

//TODO: Remember to remove some dependencies which are not used, refer to package.json