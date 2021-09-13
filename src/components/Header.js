import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <img src="/images/logo-bookmark.svg" alt="logo" />
      <Menu>
        <li className="menu-item">
          <a href="#">Features</a>
        </li>
        <li className="menu-item">
          <a href="#">Pricing</a>
        </li>
        <li className="menu-item">
          <a href="#">Contact</a>
        </li>
        <button className="button button-red" type="button">
          Login
        </button>
      </Menu>
    </Container>
  );
};

const Container = styled.nav`
  width: 1128px;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  img {
    width: 170px;
    cursor: pointer;
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  a {
    text-decoration: none;
    color: hsl(229, 8%, 60%);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.7rem;
    font-weight: 500;
    transition: all 167ms;
  }
  .menu-item {
    margin-right: 5rem;
  }
  .menu-item:hover a {
    color: hsl(0, 94%, 76%);
  }
  .button-red {
    color: hsl(229, 8%, 90%);
    background-color: hsl(0, 94%, 66%);
    padding: 1rem 2.5rem;
    font-size: 1.6rem;
    font-family: inherit;
    border: 0;
    border: 3px solid transparent;
    border-radius: 0.6rem;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: 0 0.7rem 0.7rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 167ms;
  }
  .button-red:hover {
    background-color: transparent;
    border: 3px solid hsl(0, 94%, 66%);
    color: hsl(0, 94%, 66%);
  }
`;
export default Header;
