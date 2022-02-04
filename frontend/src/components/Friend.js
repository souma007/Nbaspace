import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Friend = ({ friend, users }) => {
  console.log(users);
  console.log(friend);

  const profile = users.find((user) => {
    console.log(user._id);
    return user._id === friend;
  });

  const { avatarUrl, name } = profile;

  const history = useHistory();

  const handleNameClick = () => {
    history.push(`/users/${friend}`);
  };

  return (
    <Main>
      <Picture src={avatarUrl} onClick={handleNameClick} />
      <Name>{name} </Name>
    </Main>
  );
};

export default Friend;

const Main = styled.div`
  display: flex;
`;

const Picture = styled.img`
  width: 200px;
  height: 200px;
`;

const Name = styled.div``;
