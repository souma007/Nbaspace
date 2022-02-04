import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserProvider";
import { useContext } from "react";

const User = ({ user }) => {
  const { avatarUrl, _id } = user;

  const { currentUser } = useContext(CurrentUserContext);

  const history = useHistory();

  const handleNameClick = () => {
    history.push(`/users/${_id}`);
  };

  return (
    <Main>
      <Profile
        src={avatarUrl}
        onClick={handleNameClick}
        isFriend={currentUser?.friends.find((friend) => {
          return friend === _id;
        })}
      />
    </Main>
  );
};

export default User;

const Main = styled.div``;

const Profile = styled.img`
  width: 115px;
  height: 120px;
  margin: 5px;
  border: solid 2px orangered;
  padding: 10px;
  background-color: ${(props) => {
    return props.isFriend ? " violet" : " none";
  }};
`;
