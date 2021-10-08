import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
 
  max-width: 90rem;  
  margin: 9rem auto 0 3rem;
  padding: 0 2rem;
  box-sizing: border-box;  

  @media(min-width: 768px) {
    margin-left: auto;
  }
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export { PageLayout };
