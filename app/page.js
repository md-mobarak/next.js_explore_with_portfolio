import Home from "./components/Home/Home";
import React from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const page = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default page;
