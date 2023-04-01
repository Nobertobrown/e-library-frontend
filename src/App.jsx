import React from "react";
import "./App.css";
import ResponsiveTopAppBar from "./components/TopAppBar";
import ResponsiveMiddleAppBar from "./components/MiddleAppBar";
import MiniDrawer from "./components/MiniDrawer";
import Footer from "./components/AppFooter";
import Newsletter from "./components/Newsletter";

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
