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
    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        items.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");
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
    transition: all 250ms;
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
