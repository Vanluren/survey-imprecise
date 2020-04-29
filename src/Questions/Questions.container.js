import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  CardGroup,
} from "react-bootstrap";
import StateContext from "../State/context";
import CaseCard from "../Case/CaseCard.container";
import { saveAnswer, nextQuestion } from "../State/provider";
import { useHistory, useParams } from "react-router-dom";

const Questions = () => {
  const [step, setStep] = useState(1);
  const history = useHistory();
  const { isLoading, questions, currentQuestion, numOfQuestions } = useContext(
    StateContext
  );
  const question = questions[step - 1];
  const [chosenCard, setChosenCard] = useState(null);
  const onCaseChoose = (caseId) => {
    return setChosenCard(caseId);
  };
  const onNextClickHandler = () => {
    saveAnswer(question.questionId, chosenCard, question.cases);
    if (step + 1 <= numOfQuestions) {
      return setStep(step + 1);
    }
    return history.push("/end");
  };
  const renderCases = () =>
    question.cases.map((info, idx) => {
      return (
        <CaseCard
          key={idx}
          idx={idx}
          caseInfo={info.case}
          onClickHandler={onCaseChoose}
          chosen={chosenCard === info.case.caseId}
        />
      );
    });

  if (isLoading || questions?.length <= 0) {
    return (
      <ViewWrapper className="d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="primary" />
      </ViewWrapper>
    );
  }

  return (
    <ViewWrapper>
      <Row className="justify-content-center">
        <Col xs={8}>
          <ContentWrapper>
            <h2>
              Spørgsmål {step} af {questions.length}
            </h2>
            <p>{question.content}</p>
          </ContentWrapper>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <CardGroup>{renderCases()} </CardGroup>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <NextButton
            disabled={chosenCard === null}
            onClick={onNextClickHandler}
          >
            Næste spørgsmål
          </NextButton>
        </Col>
      </Row>
    </ViewWrapper>
  );
};

const ViewWrapper = styled(Container)`
  margin-top: 60px;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled(Button)`
  margin-top: 30px;
  float: right;
`;

Questions.propTypes = { questions: PropTypes.array };

export default Questions;
