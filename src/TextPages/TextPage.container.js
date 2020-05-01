import React from "react";
import styled from "styled-components";
import { Row, Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TextPage = ({
  children,
  linkTo,
  onNextClick,
  buttonText,
  btnDisabled,
}) => {
  const renderNextBtn = () => {
    if (linkTo) {
      return (
        <Link to={linkTo}>
          <NextButton variant="primary" disabled={btnDisabled}>
            {buttonText || "Næste"}
          </NextButton>
        </Link>
      );
    }

    return (
      <NextButton
        variant="primary"
        disabled={btnDisabled}
        onClick={(args) => onNextClick(args)}
      >
        {buttonText || "Næste"}
      </NextButton>
    );
  };
  return (
    <Container>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <HeaderSection>{children}</HeaderSection>
        </Col>
      </Row>
      {(linkTo || buttonText) && (
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>{renderNextBtn()}</Col>
        </Row>
      )}
    </Container>
  );
};

const HeaderSection = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 1rem;
`;
const NextButton = styled(Button)`
  float: right;
`;

export default TextPage;
