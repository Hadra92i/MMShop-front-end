import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Mydiv = styled.div`
  padding: 0.7rem 0;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: 14px;
  font-weight: 500;
  text-align: center;
  ${mobile({
    paddingRight: "5px",
    paddingLeft: "5px",
  })}
`;

const Copyrights = () => {
  return <Mydiv>{new Date().getFullYear()} &copy; Mohamed Moustafa Shop</Mydiv>;
};

export default Copyrights;
