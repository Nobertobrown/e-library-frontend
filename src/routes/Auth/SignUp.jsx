import React from "react";
import ResponsiveTopAppBar from "../../components/AppBar/TopAppBar";
import ResponsiveMiddleAppBar from "../../components/AppBar/MiddleAppBar";
import Footer from "../../components/Footer/AppFooter";

export default function SignUpPage() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");

  return (
    <>
      <ResponsiveTopAppBar />
      <ResponsiveMiddleAppBar />
      <Footer />
    </>
  );
}
