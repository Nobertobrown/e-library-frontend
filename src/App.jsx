import React from "react";
import "./App.css";
import ResponsiveTopAppBar from "./components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "./components/AppBar/MiddleAppBar";
import MiniDrawer from "./components/Drawer/MiniDrawer";
import Footer from "./components/Footer/AppFooter";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <ResponsiveTopAppBar />
      <ResponsiveMiddleAppBar />
      <MiniDrawer />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
