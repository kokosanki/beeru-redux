import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";

const CurrentPage = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/favorites" exact render={() => <FavoritesPage />} />
      </Switch>
    </>
  );
};

export default CurrentPage;
