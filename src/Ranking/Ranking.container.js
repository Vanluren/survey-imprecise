import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { uniq } from "lodash";
import {
  Row,
  Col,
  Container,
  Card,
  CardDeck,
  Form,
  Button,
} from "react-bootstrap";
import StateContext from "../State/context";
import Parameter from "../Case/components/Parameter";
import { toolTipTextsLong } from "../utils/tooltip-texts";
import { useHistory } from "react-router-dom";
import Question from "./components/Question";
import { saveRanking } from "../State/provider";

const Ranking = () => {
  const firstRender = useRef(true);
  const formRef = useRef(null);
  const [step, setStep] = useState(1);
  const [validationError, setValidationError] = useState(null);
  const [ranks, setRanks] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const history = useHistory();
  const { phaseTwoQuestions } = useContext(StateContext);
  const titles = ["Grøntsagsleverandør", "Ny kyllingekød- og æggeleverandør"];
  const question = { title: titles[step - 1], ...phaseTwoQuestions[step - 1] };
  const renderParams = (params) => {
    return params.map(({ parameter }, idx) => {
      return (
        <Parameter
          scoreLong
          indicator={parameter.indicator}
          score={parameter.score}
        />
      );
    });
  };

  const alpha = ["a", "b", "c", "d", "e"];
  const renderCaseCards = () => {
    return question.questionCases.map(({ case: { caseParameters } }, idx) => (
      <Card style={{ marginBottom: "15px" }}>
        <Card.Header style={{ textTransform: "capitalize" }}>
          Leverandør {alpha[idx]}
        </Card.Header>
        <Card.Body>{renderParams(caseParameters)}</Card.Body>
      </Card>
    ));
  };

  const renderOptions = () =>
    question.questionCases.map(({ case: { caseId } }, idx) => {
      return (
        <option
          style={{ textTransform: "capitalize" }}
          disabled={false}
          value={caseId}
        >
          Leverandør {alpha[idx]}
        </option>
      );
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    saveRanking(Object.values(ranks));
    if (step + 1 <= phaseTwoQuestions.length) {
      event.target.reset();
      window.scrollTo(0, 0);
      return setStep(step + 1);
    }
    return history.push("/end");
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false; // it's no longer the first render
      return; // skip the code below
    }
    if (Object.values(ranks).includes(null)) {
      setValidationError("Alle felter er ikke udfyldt");
    } else if (
      uniq(Object.values(ranks)).length !== Object.values(ranks).length
    ) {
      setValidationError("Den samme leverandør må ikke vælges flere gange.");
    } else {
      setValidationError(null);
    }
  }, [ranks, validationError]);
  return (
    <ViewWrapper>
      <Question question={question} />
      <Row>
        <Col xs={12} sm={6}>
          <CardDeck className="d-flex flex-column">
            {renderCaseCards()}
          </CardDeck>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col>
              <CallOut className="callout-warning">
                {Object.values(toolTipTextsLong).map((tip) => (
                  <Row>
                    <Col>
                      <ScoreWrapper>
                        <Score className={`${tip.color} text-light`}>
                          {tip.name}
                        </Score>
                        <p style={{ margin: "8px" }}>{tip.desc}</p>
                      </ScoreWrapper>
                    </Col>
                  </Row>
                ))}
              </CallOut>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                {question.questionCases.map((_, idx) => (
                  <Row
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <Col xs={2} sm={1}>
                      <h4>{idx + 1}.</h4>
                    </Col>
                    <Col xs={10} sm={11}>
                      <Form.Control
                        defaultValue={"DEFAULT"}
                        ref={formRef}
                        as="select"
                        size="lg"
                        custom
                        value={ranks.idx}
                        onChange={(event) => {
                          return setRanks({
                            ...ranks,
                            [idx]: event.target.value,
                          });
                        }}
                      >
                        <option value="DEFAULT" defaultValue disabled hidden>
                          Vælg Leverandør
                        </option>
                        {renderOptions()}
                      </Form.Control>
                    </Col>
                  </Row>
                ))}
                <Row>
                  <Col>
                    <ValidationError className="text-danger">
                      {validationError}
                    </ValidationError>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      style={{ float: "right" }}
                      disabled={validationError || firstRender.current}
                      type="submit"
                    >
                      Gem og fortsæt
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </ViewWrapper>
  );
};
const ValidationError = styled.p`
  display: flex;
  margin: 0;
  padding: 10px 15px;
`;
const ViewWrapper = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const CallOut = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 0 20px 0;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #428bca;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Score = styled.p`
  padding: 0 8px;
  margin: 0 0 7px 8px;
  text-transform: capitalize;
  max-width: 70px;
  max-height: 25px;
`;

export default Ranking;
