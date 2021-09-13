import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <About>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="button button-blue">Get it on Chrome</button>
        <button className="button">Get it on Firefox</button>
      </About>
      <Image>
        <img src="/images/illustration-hero.svg" alt="hero" />
      </Image>
    </Container>
  );
};

const Container = styled.div`
  width: 1128px;
  display: flex;
  margin: 0 auto;
  position: relative;
  padding-top: 25vh;
  align-items: center;
`;
const About = styled.div`
  h1 {
    font-size: 4.5rem;
    letter-spacing: 1px;
    color: hsl(229, 31%, 21%);
    margin-bottom: 2.5rem;
  }
  p {
    color: hsl(229, 8%, 60%);
    line-height: 1.6;
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }
  .button {
    padding: 1.5rem 2.5rem;
    font-size: 1.6rem;
    font-family: inherit;
    background-color: hsl(229, 8%, 95%);
    border-radius: 0.6rem;
    font-weight: 500;
    border: 3px solid transparent;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 167ms;
    color: hsl(229, 31%, 21%);
  }
  .button:hover {
    border: 3px solid hsl(229, 31%, 21%);
    background-color: transparent;
  }
  .button-blue {
    margin-right: 2rem;
    background-color: hsl(231, 69%, 60%);
    color: hsl(229, 8%, 90%);
  }
  .button-blue:hover {
    border: 3px solid hsl(231, 69%, 60%);
    color: hsl(231, 69%, 60%);
  }
`;
const Image = styled.div`
  transform: translateX(10rem);
  position: relative;

  &::before {
    content: "";
    width: 200%;
    display: block;
    height: 35rem;
    bottom: -5%;
    right: -130%;
    position: absolute;
    background-color: hsl(231, 69%, 60%);
    z-index: -1;
    border-radius: 50rem;
  }
`;

export default Hero;
