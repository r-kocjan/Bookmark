import React from "react";
import styled from "styled-components";

const Extensions = () => {
  return (
    <Container>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <Browsers>
        <div className="card">
          <img src="/images/logo-chrome.svg" alt="chrome" />
          <h3>Add to Chrome</h3>
          <p className="version">Minimum version 62</p>

          <button className="button-blue" type="button">
            Add & Install Extension
          </button>
        </div>
        <div className="card firefox">
          <img src="/images/logo-firefox.svg" alt="firefox" />
          <h3>Add to Firefox</h3>
          <p className="version">Minimum version 55</p>

          <button className="button-blue" type="button">
            Add & Install Extension
          </button>
        </div>
        <div className="card opera">
          <img src="/images/logo-opera.svg" alt="opera" />
          <h3>Add to Opera</h3>
          <p className="version">Minimum version 46</p>

          <button className="button-blue" type="button">
            Add & Install Extension
          </button>
        </div>
      </Browsers>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20rem;

  h2 {
    font-size: 3.3rem;
    color: hsl(229, 31%, 21%);
    margin-bottom: 2.5rem;
  }
  p {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 8rem;
    color: hsl(229, 8%, 60%);
    font-size: 2rem;
    line-height: 1.4;
  }
`;
const Browsers = styled.div`
  justify-content: center;

  align-items: flex-start;
  display: flex;
  .firefox {
    margin-top: 6rem;
  }
  .opera {
    margin-top: 12rem;
  }
  .card {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
    padding: 4.5rem;
    border-radius: 1rem;
    transition: all 167ms;
    position: relative;
    &::before {
      content: "";
      background-image: url("/images/bg-dots.svg");
      background-size: cover;
      background-position: center;
      left: 0;
      bottom: 32%;
      position: absolute;
      width: 100%;
      height: 4px;
    }
    &:hover {
      transform: scale(1.03);
    }
    img {
      margin-bottom: 2.3rem;
    }
    h3 {
      font-size: 2rem;
      color: hsl(229, 31%, 21%);
      margin-bottom: 1rem;
    }
    p {
      width: 100%;
      font-size: 1.6rem;
      margin-bottom: 6rem;
    }

    &:not(:last-child) {
      margin-right: 5rem;
    }

    .button-blue {
      padding: 1.5rem 2rem;
      font-size: 1.6rem;
      font-family: inherit;

      border-radius: 0.6rem;
      font-weight: 500;
      border: 3px solid transparent;
      box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 167ms;

      background-color: hsl(231, 69%, 60%);
      color: hsl(229, 8%, 90%);

      &:hover {
        border: 3px solid hsl(231, 69%, 60%);
        color: hsl(231, 69%, 60%);
        background-color: transparent;
      }
    }
  }
`;

export default Extensions;
