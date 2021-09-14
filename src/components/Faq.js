import React, { useEffect } from "react";
import styled from "styled-components";
const Faq = () => {
  useEffect(() => {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
      question.addEventListener("click", function () {
        questions.forEach((q) => {
          q.children[1].classList.remove("active");
          q.children[1].classList.remove("visible");

          q.children[0].children[1].classList.remove("arrow-active");
        });
        question.children[1].classList.add("active");
        question.children[1].classList.add("visible");
        question.children[0].children[1].classList.add("arrow-active");
      });
    });
  }, []);

  return (
    <Container>
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Questions>
        <div className="question">
          <ul>
            <h3>What is Bookmark?</h3>
            <img
              src="/images/icon-arrow.svg"
              alt="expand"
              className="image-arrow"
            />
          </ul>
          <div className="answer">
            <p className="answer-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          </div>
        </div>
        <div className="question">
          <ul>
            <h3>How can I request a new browser?</h3>
            <img
              src="/images/icon-arrow.svg"
              alt="expand"
              className="image-arrow"
            />
          </ul>
          <div className="answer">
            <p className="answer-paragraph">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          </div>
        </div>
        <div className="question">
          <ul>
            <h3>Is there a mobile app?</h3>
            <img
              src="/images/icon-arrow.svg"
              alt="expand"
              className="image-arrow"
            />
          </ul>
          <div className="answer">
            <p className="answer-paragraph">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </div>
        </div>
        <div className="question">
          <ul>
            <h3>What about other Chromium browsers?</h3>
            <img
              src="/images/icon-arrow.svg"
              alt="expand"
              className="image-arrow"
            />
          </ul>
          <div className="answer">
            <p className="answer-paragraph">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit. More Info 35,000+ already joined Stay
              up-to-date with what we’re doing Contact Us Features Pricing
              Contact
            </p>
          </div>
        </div>
      </Questions>
      <button className="button-blue">More Info</button>
    </Container>
  );
};

const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 15rem;
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
  .button-blue {
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

const Questions = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-bottom: 5rem;
  text-align: left;

  h3 {
    font-size: 2.2rem;
    font-weight: lighter;
  }
  p {
    width: 100%;
    margin: 0;
  }
  .question {
    padding: 2rem 0;
    /* border-top: 1px solid hsl(229, 8%, 80%); */
    border-bottom: 1px solid hsl(229, 8%, 80%);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 2rem; */
    cursor: pointer;
    transition: all 250ms;
    &:hover h3 {
      color: hsl(0, 94%, 66%);
    }
    img {
      width: 24px;
      transition: all 167ms;
    }

    .arrow-active {
      transform: rotate(180deg);
    }
  }
  .answer {
    visibility: hidden;
    /* display: none; */
    height: 0;
    opacity: 0;

    /* transform: translateY(-15%); */
    transition: all 250ms;
  }
  .active {
    /* display: block; */
    /* transform: translateY(0); */
    opacity: 1;
    padding-top: 2rem;
    height: auto;
  }
  .visible {
    visibility: visible;
  }
`;

export default Faq;
