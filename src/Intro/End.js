import React from "react";
import styled from "styled-components";
import { Row, Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const End = () => {
  return (
    <Container>
      <Row>
        <Col xs={10}>
          <HeaderSection>
            <h1>Tusind tak!</h1>
            <p>Du har lige gjort mig meget glad.</p>
          </HeaderSection>
        </Col>
      </Row>
    </Container>
  );
};

const HeaderSection = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

export default End;
