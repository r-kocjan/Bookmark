import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <div className="center">
        <h5>35,000+ Already Joined</h5>
        <h2>
          Stay up-to-date with what <br /> we're doing{" "}
        </h2>
        <div className="cta">
          <input type="email" placeholder="Enter your email address" />
          <button className="button-red" type="button">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  background-color: hsl(231, 69%, 60%);
  color: #fff;
  padding: 10rem 0;

  .center {
    width: 1128px;
    margin: 0 auto;
    text-align: center;
  }
  h5 {
    font-size: 1.6rem;
    font-weight: lighter;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5rem;
  }
  h2 {
    font-size: 3rem;
    letter-spacing: 1px;
    margin-bottom: 3rem;
  }
  .cta {
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  input {
    width: 72%;
    padding: 1.5rem 2.5rem;
    border-radius: 0.6rem;
    border: 0;
    margin-right: 0.5rem;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-input-placeholder {
    font-family: inherit;
    color: hsl(229, 8%, 60%);
  }
  .button-red {
    padding: 1.5rem 2.5rem;
    /* font-size: 1.5rem; */
    font-family: inherit;

    border-radius: 0.6rem;
    font-weight: 500;
    border: 3px solid transparent;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 167ms;

    background-color: hsl(0, 94%, 66%);
    color: hsl(229, 8%, 90%);

    &:hover {
      border: 3px solid hsl(0, 94%, 66%);
      color: hsl(0, 94%, 66%);
      background-color: #fff;
    }
  }
`;

export default Contact;
