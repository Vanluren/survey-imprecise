import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, CardDeck } from "react-bootstrap";
import StateContext from "../State/context";
import CaseCard from "../Case/CaseCard.container";
import { saveAnswer } from "../State/provider";
import { useHistory } from "react-router-dom";

const Questions = () => {
  const [step, setStep] = useState(1);
  const history = useHistory();
  const { phaseOneQuestions, respondantId } = useContext(StateContext);
  const question = phaseOneQuestions[step - 1];
  const [chosenCard, setChosenCard] = useState(null);
  const onCaseChoose = (caseId) => {
    return setChosenCard(caseId);
  };
  const onNextClickHandler = () => {
    const cases = question.questionCases.map(
      (caseInfo) => caseInfo.case.caseId
    );
    saveAnswer(respondantId, question.questionId, chosenCard, cases);
    if (step + 1 <= phaseOneQuestions.length) {
      setChosenCard(null);
      return setStep(step + 1);
    }
    return history.push("/phase/2");
  };
  const renderCases = () =>
    question.questionCases.map((info, idx) => {
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
  return (
    <ViewWrapper>
      <Row>
        <Col xs={{ span: 8 }}>
          <ContentWrapper>
            <h1>
              Spørgsmål {step} af {phaseOneQuestions.length}
            </h1>
            <p>{question.content}</p>
          </ContentWrapper>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={{ span: 12 }}>
          <CardDeck>{renderCases()} </CardDeck>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={{ span: 12 }}>
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
  margin-top: 8rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextButton = styled(Button)`
  margin-top: 1rem;
  float: right;
`;

export default React.memo(Questions);
