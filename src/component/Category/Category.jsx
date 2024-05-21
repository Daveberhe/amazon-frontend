import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos?.map((infos, i) => (
        <CategoryCard data={infos} key={i} />
      ))}
    </section>
  );
}

export default Category;