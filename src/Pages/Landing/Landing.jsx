import React from "react";
import LayOut from "../../component/LayOut/LayOut";
import CarouselEffect from "../../component/Carousel/Carousel";
import Category from "../../component/Category/Category";
import Product from "../../component/Product/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
