import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Endpoint";
import ProductCard from "../../component/Product/ProductCard";
// import Loader from "../../component/Loader/Loader";

function Results() {
  const { CategoryName } = useParams();
  const [results, setResults] = useState([]);
  // const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${CategoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setisLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Result</h1>
        <p style={{ padding: "30px" }}>Category / {CategoryName}</p>
        <hr />
        {/* isLoading? */}
        {/* <Loader /> */}
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderAdd={true} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
