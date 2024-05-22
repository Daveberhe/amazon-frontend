import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Endpoint";
import ProductCard from "../../component/Product/ProductCard";
import Loader from "../../component/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        console.log(res);
      })
      .catch(() => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
}

export default ProductDetail;
