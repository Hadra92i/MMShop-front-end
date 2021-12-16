import React from "react";
import Announcements from "../ws_components/Announcements";
import Copyrights from "../ws_components/Copyrights";
import Navbar from "../ws_components/Navbar";
import Slider from "../ws_components/Slider";
import Products from "../ws_components/Products";
import Newsletter from "../ws_components/Newsletter";
import Categories from "../ws_components/Categories";
import Footer from "../ws_components/Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
