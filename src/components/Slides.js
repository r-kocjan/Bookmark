import React from "react";
import styled from "styled-components";

const Slides = ({ props }) => {
  const { id, header, para } = props;

  return (
    <Container>
      <div className="illustration-img">
        <img src={`/images/illustration-features-tab-${id}.svg`} alt="i1" />
      </div>
      <Content>
        <h2>{header}</h2>
        <p>{para}</p>
        <button className="button" type="button">
          More info
        </button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 10rem;
  padding-bottom: 20rem;
  width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .illustration-img {
    margin-right: 15rem;
    position: relative;
    width: 800px;
    img {
      height: 400px;
      width: 550px;
    }
    &::before {
      content: "";
      width: 250%;
      display: block;
      height: 35rem;
      left: -180%;
      bottom: -25%;
      position: absolute;
      background-color: hsl(231, 69%, 60%);
      z-index: -1;
      border-radius: 50rem;
    }
  }
`;
const Content = styled.div`
  h2 {
    font-size: 3.3rem;
    color: hsl(229, 31%, 21%);
    margin-bottom: 2.5rem;
  }
  p {
    color: hsl(229, 8%, 60%);
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 2.5rem;
  }
  .button {
    padding: 1.5rem 2.5rem;
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
`;

export default Slides;
