import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Background from "./Background.js";
import Friend from "./Friend.js";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();
      console.log(data);
      setProfile(data.data);
    };

    const fetchPeople = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.data);
      console.log(data.data);
    };

    const fetchAll = async () => {
      await fetchProfile();
      await fetchPeople();
      setIsLoading(false);
    };

    fetchAll();
  }, [userId]);

  if (isLoading) {
    return <h1> Loading </h1>;
  }

  const { avatarUrl, name, friends } = profile;
  console.log(users);

  return (
    <div>
      <Main>
        <User>
          <Picture src={avatarUrl} />
          <h3>{name}</h3>
        </User>

        <Title>
          <h3>{name}'s Friends</h3>
        </Title>
        <Friends>
          {friends.map((friend) => {
            console.log(friend);
            return (
              <FriendsList>
                {!isLoading && <Friend friend={friend} users={users} />}
              </FriendsList>
            );
          })}
        </Friends>
      </Main>
    </div>
  );
};

export default Profile;

const Main = styled.div``;

const Picture = styled.img`
  width: 300px;
  height: 300px;
`;

const User = styled.div`
  display: flex;
`;

const FriendsList = styled.div``;

const Title = styled.div``;

const Friends = styled.div`
  background-color: white;
  display: flex;
`;
