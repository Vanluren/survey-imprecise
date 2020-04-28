import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StateContext from '../State/context';
import Suppliers from '../Suppliers/Suppliers.container';
import { Link } from 'react-router-dom';

const Questions = () => {
  const { questions } = useContext(StateContext);
  return (
    <ViewWrapper>
      <Row className="justify-content-center">
        <Col xs={8}>
          <ContentWrapper>
            <h2>
              Spørgsmål {questions[0].id} af {questions.length}
            </h2>
            <p>{questions[0].text}</p>
          </ContentWrapper>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Suppliers suppliers={questions[0].suppliers} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Link to="/question/2">
            <NextButton>Næste spørgsmål</NextButton>
          </Link>
        </Col>
      </Row>
    </ViewWrapper>
  );
};

const ViewWrapper = styled(Container)`
  margin-top: 60px;
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
