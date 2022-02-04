import React from "react";
import Background from "./Background.js";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserProvider";
import { useContext } from "react";
import { useEffect } from "react";

const SignIn = () => {
  const [name, setName] = useState("");

  const history = useHistory();

  const { setCurrentUser, currentUser } = useContext(CurrentUserContext);

  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      history.push(`/`);
    }
  }, [currentUser]);

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  //   const fetchProfile = async () => {
  //     const res = await fetch(`/api/users/`);
  //     const data = await res.json();
  //     console.log(data);
  //     setProfiles(data.data);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ username: name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { status } = data;
        if (status === 200) {
          window.sessionStorage.setItem("name", JSON.stringify(data.data));
          setCurrentUser(data.data);
          history.push(`/`);
        } else {
          window.alert(data.data);
        }
      });
  };

  //   const profile = profiles.find((user) => {
  //     console.log(user.name);
  //     return user.name === name;
  //   });

  //   if (profile) {
  //     return;
  //   }

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <Login>
          <Name onChange={(event) => handleChange(event)} value={name}></Name>
          <Submit>
            <h2 type="submit">Submit</h2>
          </Submit>
        </Login>
      </form>
      <Background />
    </Main>
  );
};

export default SignIn;

const Main = styled.div``;

const Submit = styled.button`
  background-color: orangered;
  color: black;
`;

const Name = styled.textarea``;

const Login = styled.div`
  background-color: black;
`;
