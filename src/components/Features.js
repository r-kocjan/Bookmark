import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slides from "./Slides";

const Features = () => {
  const [selected, setSelected] = useState({
    id: "1",
    header: "Bookmark in one click",
    para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  });

  useEffect(() => {
    const items = document.querySelectorAll(".select-item");
    const colors = document.querySelectorAll(".color");
    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        items.forEach((el) => {
          el.classList.remove("active");
        });
        colors.forEach((color) => {
          color.classList.remove("color-active");
        });
        item.classList.add("active");
        e.target.parentNode.children[1].classList.add("color-active");
        if (e.target.textContent === "Simple Bookmarking") {
          marker.current.style.left = "0%";
          setSelected({
            id: "1",
            header: "Bookmark in one click",
            para: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          });
        } else if (e.target.textContent === "Speedy Searching") {
          marker.current.style.left = "37%";
          setSelected({
            id: "2",
            header: "Intelligent search",
            para: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
          });
        } else if (e.target.textContent === "Easy Sharing") {
          marker.current.style.left = "70%";
          setSelected({
            id: "3",
            header: "Share your bookmarks",
            para: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
          });
        }
      });
    });
  }, []);
  const marker = useRef(null);

  return (
    <div>
      <Container>
        <About>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <ul className="select">
            <li>
              <a className="select-item active">Simple Bookmarking</a>
              <div className="color color-active"></div>
            </li>
            <li>
              <a className="select-item">Speedy Searching</a>
              <div className="color"></div>
            </li>
            <li>
              <a className="select-item">Easy Sharing</a>
              <div className="color"></div>
            </li>
          </ul>
          <div className="line">
            <div className="marker" ref={marker}></div>
          </div>
        </About>
      </Container>
      <Slides props={selected} />
    </div>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    width: 95vw;
    margin-top: 20vh;
  }
`;
const About = styled.div`
  h2 {
    font-size: 3.3rem;
    color: hsl(229, 31%, 21%);
    margin-bottom: 2.5rem;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  p {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 8rem;
    color: hsl(229, 8%, 60%);
    font-size: 2rem;
    line-height: 1.4;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .select {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 65%;
    margin: 0 auto;
    transition: all 250ms;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
      li {
        margin: 2rem 0;
        position: relative;
      }
      .color {
        display: none;
        height: 3px;
        width: 35%;
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        background-color: hsl(0, 94%, 66%);
      }
      .color-active {
        display: block;
      }
    }
    .select-item {
      @media (max-width: 768px) {
        margin-bottom: 3rem;
        border-bottom: 1px solid hsl(229, 8%, 75%);
        position: absolute;
        padding-bottom: 1.5rem;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .select-item:hover {
      color: hsl(0, 94%, 66%);
    }
    a {
      font-size: 2rem;
      color: hsl(229, 8%, 60%);
      cursor: pointer;
    }
    .active {
      color: hsl(229, 31%, 21%) !important;
    }
  }
  .line {
    width: 700px;
    margin: 0 auto;
    margin-top: 4rem;
    height: 1px;
    background-color: hsl(229, 8%, 90%);
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }
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

export default Features;
