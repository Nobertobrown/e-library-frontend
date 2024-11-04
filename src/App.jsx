import React from "react";
import "./styles/App.css";
import ResponsiveTopAppBar from "./components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "./components/AppBar/MiddleAppBar";
import { Outlet, useLocation } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  // const [appState, setAppState] = useState({
  //   isAuth: false,
  // });
  const location = useLocation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {location.pathname !== "/" && location.pathname !== "/signup" && (
        <>
          <ResponsiveTopAppBar />
          <ResponsiveMiddleAppBar />
        </>
      )}
      <Outlet />
    </LocalizationProvider>
  );
}

export default App;
