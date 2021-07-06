import CreateMusicPage from "Pages/CreateMusicPage/CreateMusicPage";
import LoginPage from "Pages/LoginPage/LoginPage";
import MusicsListPage from "Pages/MusicsListPage/MusicsListPage";
import SignUpPage from "Pages/SignUpPage/SignUpPage";
import React from "react";
import ErrorPage from "Pages/ErrorPage/ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/criar-musica">
          <CreateMusicPage />
        </Route>
        <Route exact path="/lista-musicas">
          <MusicsListPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
