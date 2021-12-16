import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: 0,
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <div style={{background : '#F7F7F7'}}>
      <h2 className="text-center fw-bold lh-base pt-4 mb-2 text-uppercase">Nos Catégories</h2>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
