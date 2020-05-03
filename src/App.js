import React from "react";
import StateProvider from "./State/provider";
import Questions from "./Questions/Questions.container";
import Intro from "./TextPages/Intro";
import End from "./TextPages/End";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Respondant from "./TextPages/Respondant";
import Sustainabilty from "./TextPages/Sustainabilty";
import PhaseOne from "./TextPages/PhaseOne";
import PhaseTwo from "./TextPages/PhaseTwo";
import Ranking from "./Ranking/Ranking.container";

const App = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Container fluid>
          <Switch>
            <Route path="/" component={Intro} exact />
            <Route path="/hvem-er-du" component={Respondant} exact />
            <Route path="/sustainability" component={Sustainabilty} exact />
            <Route path="/phase/1" component={PhaseOne} exact />
            <Route path="/questions" component={Questions} />
            <Route path="/phase/2" component={PhaseTwo} exact />
            <Route path="/ranking" component={Ranking} exact />
            <Route path="/end" component={End} exact />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </StateProvider>
    </BrowserRouter>
  );
};

export default App;
