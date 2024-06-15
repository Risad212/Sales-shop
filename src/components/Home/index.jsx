import React from "react";
import Products from "./Products";
import Banner from "./Banner";
import ProductCategory from "./productCategory";
import CallToAction from "./callToAction";
import ProductFeature from './productFeature';

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductCategory />
      <Products />
      <ProductFeature />
      <CallToAction />
    </>
  );
};

export default HomePage;
