import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  console.log(categoryInfos);
  return (
    <section className={classes.category_container}>
      {categoryInfos?.map((infos, i) => {
        return <CategoryCard data={infos} key={i} />;
      })}
    </section>
  );
}

export default Category;
