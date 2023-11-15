import React from "react";
import "./styles/App.css";
// import ResponsiveTopAppBar from "./components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "./components/AppBar/MiddleAppBar";
import { Outlet } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  // const [appState, setAppState] = useState({
  //   isAuth: false,
  // });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <ResponsiveTopAppBar /> */}
      <ResponsiveMiddleAppBar />
      <Outlet />
    </LocalizationProvider>
  );
}

export default App;
