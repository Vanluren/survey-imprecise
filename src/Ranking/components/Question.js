import React from "react";
import { Row, Col } from "react-bootstrap";

const Question = ({ question }) => {
  return (
    <Row>
      <Col xs={{ span: 12 }}>
        <h1>{question.title}</h1>
        <p>{question.content}</p>
      </Col>
    </Row>
  );
};

export default Question;
