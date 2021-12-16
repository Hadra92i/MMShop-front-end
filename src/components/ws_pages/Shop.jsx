import React from "react";
import styled from "styled-components";
import Navbar from "../ws_components/Navbar";
import Announcements from "../ws_components/Announcements";
import Footer from "../ws_components/Footer";
import Newsletter from "../ws_components/Newsletter";
import Products from "../ws_components/Products";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductsList = () => {
  return (
    <Container>
      {/* <Title>Nos Produits</Title> */}
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer Les Produits</FilterText>
          <Select>
            <Option disabled selected>
              Couleur
            </Option>
            {/* <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option> */}
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            {/* <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option> */}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrer les Produits</FilterText>
          <Select>
            <Option selected>Nouveaux</Option>
            <Option>Prix (crs)</Option>
            <Option>Prix (decrs)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductsList;
