import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const MyDiv = styled.div`
  background-color: #4869ee;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  padding: 0.8rem 0;

  & p {
    margin-bottom: 0;
  }

  ${mobile({
    textAlign: "center",
    fontSize: "15px",
    padding: "0.7rem 0.5rem",
  })}
`;

const Annonces = () => {
  return (
    <MyDiv>
      <p>Super ! Livraison gratuite pour les commandes de plus de 2000 MRU</p>
    </MyDiv>
  );
};

export default Annonces;
