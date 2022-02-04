import React, { useState, useEffect } from "react";
import styled from "styled-components";
import User from "./User";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     fetch(`/api/users`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIsLoading(false);
  //         setUsers(data.data);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.data);
      console.log(data.data);
      setIsLoading(false);
    };
    fetchPeople();
  }, []);

  console.log(isLoading);

  if (isLoading === true) {
    return <h1> Loading </h1>;
  }

  return (
    <>
      <HomeFeed>
        <Members>
          <h3> All NBAspace members </h3>
        </Members>
        <Users>
          {users.map((user) => {
            console.log(user);
            return (
              <div key={user._id}>{!isLoading && <User user={user} />}</div>
            );
          })}
        </Users>
      </HomeFeed>
    </>
  );
};

const HomeFeed = styled.div`
  background-color: white;
`;

const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 140px;
`;

const Members = styled.div`
  margin-top: 20px;
  margin-left: 140px;
  h3 {
    font-size: 30px;
    color: orangered;
  }
`;

export default Homepage;
