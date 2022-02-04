import React from "react";
import nba from "../images/nba.jpg";
import styled from "styled-components";

const Background = () => {
  return (
    <>
      <Wrapper src={nba} alt="background" />
    </>
  );
};

export default Background;

const Wrapper = styled.img`
  height: 100vh;
  width: 100vw;
`;
