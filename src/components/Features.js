import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Features = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".select-item");
    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        items.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");
        console.log(e.target.textContent);
        if (e.target.textContent === "Simple Bookmarking") {
          marker.current.style.left = "0%";
        } else if (e.target.textContent === "Speedy Searching") {
          marker.current.style.left = "37%";
        } else if (e.target.textContent === "Easy Sharing") {
          marker.current.style.left = "70%";
        }
      });
    });
  }, []);
  const marker = useRef(null);
  return (
    <Container>
      <About>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="select">
          <li>
            <a className="select-item active">Simple Bookmarking</a>
          </li>
          <li>
            <a className="select-item">Speedy Searching</a>
          </li>
          <li>
            <a className="select-item">Easy Sharing</a>
          </li>
        </ul>
        <div className="line">
          <div className="marker" ref={marker}></div>
        </div>
      </About>
      <Slides></Slides>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30rem;
`;
const About = styled.div`
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
  .select {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 65%;
    margin: 0 auto;

    a {
      font-size: 2rem;
      color: hsl(229, 8%, 60%);
      cursor: pointer;
    }
    .active {
      color: hsl(229, 31%, 21%);
    }
  }
  .line {
    width: 700px;
    margin: 0 auto;
    margin-top: 4rem;
    height: 1px;
    background-color: hsl(229, 8%, 90%);
    position: relative;
  }
  .marker {
    width: 250px;
    height: 4px;
    position: absolute;
    top: -2px;
    left: 0%;
    transition: all 250ms;
    background-color: hsl(0, 94%, 66%);
  }
`;
const Slides = styled.div``;

export default Features;
