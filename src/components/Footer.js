import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="center">
        <img
          src="/images/logo-bookmark-light.svg"
          alt="logo"
          className="footer-logo"
        />
        <ul className="footer-menu">
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a>
              <img src="/images/icon-facebook.svg" alt="fb" />
            </a>
          </li>
          <li>
            <a>
              <img src="/images/icon-twitter.svg" alt="tw" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  padding: 5rem 0;
  background-color: hsl(229, 31%, 21%);
  .center {
    width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 95vw;
      flex-direction: column;
    }
  }
  .footer-logo {
    margin-right: 10rem;
    @media (max-width: 768px) {
      margin: 0;
      margin-bottom: 3.5rem;
    }
  }
  .footer-menu {
    display: flex;
    list-style: none;
    color: #fff;
    gap: 3rem;
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .social {
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    @media (max-width: 768px) {
      margin: 0;
      margin-top: 5rem;
    }
  }
  li {
    cursor: pointer;
    transition: all 167ms;
  }
  li:hover a {
    color: hsl(0, 94%, 66%);
  }
  a {
    text-transform: uppercase;
    color: hsl(229, 8%, 80%);
    letter-spacing: 1px;
  }
`;

export default Footer;
