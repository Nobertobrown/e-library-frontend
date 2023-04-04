import React from "react";
import "./App.css";
import ResponsiveTopAppBar from "./components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "./components/AppBar/MiddleAppBar";
import Footer from "./components/Footer/AppFooter";
import { Outlet } from "react-router-dom";
// import MiniDrawer from "./components/Drawer/MiniDrawer";
// import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <ResponsiveTopAppBar />
      <ResponsiveMiddleAppBar />
      <Outlet />
      {/* <MiniDrawer />
      <Newsletter /> */}
      <Footer />
    </>
  );
}

export default App;
