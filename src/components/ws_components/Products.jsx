import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 20px;
  text-align : center;
`;

const Products = () => {
  return (
    <>
     <h2 className="text-center fw-bold lh-base mt-4 mb-2 text-uppercase">Nos Produits</h2>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
