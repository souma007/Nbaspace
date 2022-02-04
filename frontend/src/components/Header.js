import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserProvider";
import { useContext } from "react";

const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);
  //useContext to get my currentUser

  return (
    <Head>
      <h1>
        <Home to="/"> NBAspace </Home>
      </h1>
      <h2>
        {currentUser ? (
          <CurrentUser>Wassup {`${currentUser.name}`}</CurrentUser>
        ) : (
          <Signin to="/signin">Sign In</Signin>
        )}
      </h2>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 100px;
  background-color: orangered;

  h1 {
    font-size: 60px;
    color: white;
  }
`;

const Home = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Signin = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CurrentUser = styled.div`
  text-decoration: none;
  color: white;
`;
