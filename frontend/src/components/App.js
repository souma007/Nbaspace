import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Header from "./Header";
import SignIn from "./SignIn";
import { CurrentUserContext } from "./CurrentUserProvider";
import { useContext } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
