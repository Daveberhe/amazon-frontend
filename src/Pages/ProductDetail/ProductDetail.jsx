import React, { useEffect, useState } from "react";
import LayOut from "../../component/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Endpoint";
import ProductCard from "../../component/Product/ProductCard";
import Loader from "../../component/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const { isLoading, setisLoading } = useState(false);
  const [product, setproduct] = useState({});
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        // setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {});
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
