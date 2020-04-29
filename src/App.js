import React from "react";
import StateProvider from "./State/provider";
import Questions from "./Questions/Questions.container";
import Intro from "./Intro/Intro.container";
import End from "./Intro/End";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Container fluid>
          <Switch>
            <Route path="/" component={Intro} exact />
            <Route path="/questions" component={Questions} />
            <Route path="/end" component={End} exact />
          </Switch>
        </Container>
      </StateProvider>
    </BrowserRouter>
  );
};

export default App;
