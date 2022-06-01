import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import "./_ErrorPage.scss";

const ErrorPage = () => {
  return (
    <Wrapper classNameName="page-100">
      <section>
        <div className="cactus">
          <div className="shadow"></div>
          <div className="right">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
          <div className="fork">
            <div className="cube top"></div>
            <div className="cube front"></div>
          </div>
          <div className="middle">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
          <div className="fork-left">
            <div className="cube top"></div>
            <div className="cube front"></div>
          </div>
          <div className="left">
            <div className="cube top"></div>
            <div className="cube front"></div>
            <div className="cube side"></div>
          </div>
        </div>
        <h3 className="bounce">Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
