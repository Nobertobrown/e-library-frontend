import React from "react";
import "./App.css";
import ResponsiveTopAppBar from "./components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "./components/AppBar/MiddleAppBar";
import Footer from "./components/Footer/AppFooter";
import { Outlet } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ResponsiveTopAppBar />
      <ResponsiveMiddleAppBar />
      <Outlet />
      <Footer />
    </LocalizationProvider>
  );
}

export default App;
