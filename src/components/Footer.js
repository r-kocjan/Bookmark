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
  }
  .footer-logo {
    margin-right: 10rem;
  }
  .footer-menu {
    display: flex;
    list-style: none;
    color: #fff;
    gap: 3rem;
  }
  .social {
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
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
