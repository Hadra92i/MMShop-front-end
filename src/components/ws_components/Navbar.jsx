import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./Menu";
import "./Navbar.css";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Button = styled.button`
  padding: 7px;
  font-size: 20px;
  /* background-color: transparent; */
  background: #4869ee;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
`;

const Logo = styled.a`
  &:hover {
    color: black;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar, setNavbar] = useState(false);

  //   const changeNavbarBg = () => {
  //     if (window.scrollY >= 80) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeNavbarBg);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg fixed-top top-0 active"
            : "navbar navbar-expand-lg sticky-top top-0"
        }
      >
        <div className="container">
          <Logo
            href="/"
            className="navbar-brand me-0 fs-1 fw-bold"
            onClick={closeMobileMenu}
          >
            MMSHOP
          </Logo>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "navbar-nav active" : "navbar-nav"}>
            {MenuItems.map((item, index) => {
              return (
                <li className="nav-item" key={index} onClick={closeMobileMenu}>
                  <Link to={item.url} className={item.cName}>
                    {item.itemName}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mx-sm-4 me-5 d-flex justify-content-between align-items-center">
            <Link to="/mon-panier">
              <ShoppingCartOutlined
                style={{ marginRight: "5px", cursor: "pointer" }}
              />
            </Link>
            <Link to="/wishlist">
              <FavoriteBorderOutlined
                style={{ marginRight: "5px", cursor: "pointer" }}
              />
            </Link>
            <SearchOutlined style={{ cursor: "pointer" }} />
          </div>
          <Link to="/creer-un-compte" className="d-sm-block d-none">
            <Button>Créer un compte</Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
