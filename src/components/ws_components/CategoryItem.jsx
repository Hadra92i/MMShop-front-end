import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-weight : 600;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  background : var(--primary-color);
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>ACHTETER MAINTENANT</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
