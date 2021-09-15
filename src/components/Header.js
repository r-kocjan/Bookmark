import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
const Header = () => {
  const hamburgerRef = useRef(null);
  const logoDarkRef = useRef(null);
  const logoLightRef = useRef(null);
  const menuRef = useRef(null);
  const closeMenuRef = useRef(null);
  const fullRef = useRef(null);
  const containerRef = useRef(null);

  const [logo, setLogo] = useState("logo-bookmark.svg");

  const openMenu = () => {
    hamburgerRef.current.style.display = "none";
    fullRef.current.style.display = "block";
    containerRef.current.style.backgroundColor = "hsl(229, 31%, 21%, 0.9)";
    setLogo("logo-bookmark-light.svg");
    document.body.style.overflowY = "hidden";
  };
  const closeMenu = () => {
    hamburgerRef.current.style.display = "block";
    fullRef.current.style.display = "none";
    containerRef.current.style.backgroundColor = "transparent";
    setLogo("logo-bookmark.svg");
    document.body.style.overflowY = "scroll";
  };

  return (
    <Container ref={containerRef}>
      <img src={`/images/${logo}`} alt="logo" className="logo logo-white" />
      <img
        src="/images/icon-hamburger.svg"
        alt=""
        className="hamburger"
        ref={hamburgerRef}
        onClick={openMenu}
      />
      <Full ref={fullRef}>
        <img
          src="/images/icon-close.svg"
          alt="close"
          className="close"
          ref={closeMenuRef}
          onClick={closeMenu}
        />
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
      </Full>
    </Container>
  );
};

const Full = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

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

  .hamburger {
    display: none;
    @media (max-width: 768px) {
      display: block;
      cursor: pointer;
      position: absolute;
      right: 10%;
      top: 5.5rem;
    }
  }
  .close {
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 16px;
      position: absolute;
      cursor: pointer;
      right: 10%;
      top: -3.3rem;
      transform: translateY(7px);
    }
  }
  @media (max-width: 768px) {
    background-color: hsl(229, 31%, 21%, 0.9);
    flex-direction: column;
    align-items: flex-start;
    transform: translate(0);
    left: 0;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    margin: 0;
    background-color: transparent;
    padding-top: 5rem;
    /* display: none; */
    .logo {
      width: 160px;
      cursor: pointer;
      margin-left: 4rem;
    }
  }
  .logo-white {
    /* display: none; */
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: auto;
  @media (max-width: 768px) {
    /* display: none; */

    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin-top: 10rem;
  }
  a {
    text-decoration: none;
    color: hsl(229, 8%, 60%);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.7rem;
    font-weight: 500;
    transition: all 167ms;
    @media (max-width: 768px) {
      font-size: 2.5rem;
      color: #fff;
    }
  }
  .menu-item {
    margin-right: 5rem;
    @media (max-width: 768px) {
      margin-right: 0;
      padding-bottom: 3rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid hsl(229, 8%, 40%);
      width: 90%;
      text-align: center;
      &:first-of-type {
        border-top: 1px solid hsl(229, 8%, 40%);
        padding-top: 3rem;
      }
    }
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
    @media (max-width: 768px) {
      width: 100%;
      font-size: 2.2rem;
      padding: 1.5rem 2.5rem;
      background-color: transparent;
      border: 3px solid #fff;
    }
  }
  .button-red:hover {
    background-color: transparent;
    border: 3px solid hsl(0, 94%, 66%);
    color: hsl(0, 94%, 66%);
  }
`;
export default Header;
