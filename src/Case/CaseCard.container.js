import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Col } from "react-bootstrap";
import Parameter from "./components/Parameter";

const CaseCard = ({ caseInfo, onClickHandler, chosen, idx }) => {
  const renderParams = () =>
    caseInfo.parameters.map(({ parameter }) => {
      return (
        <Parameter
          key={parameter.parameterId}
          indicator={parameter.indicator}
          score={parameter.score}
          descriptionOne={parameter.descriptionOne}
          descriptionTwo={parameter.descriptionTwo}
        />
      );
    });

  return (
    <Col key={caseInfo.caseId}>
      <StyledCard
        onClick={() => onClickHandler(caseInfo.caseId)}
        className={`${chosen ? "bg-info" : ""}`}
        text={chosen ? "light" : "dark"}
      >
        <Card.Header>Case {idx % 2 === 0 ? "a" : "b"}</Card.Header>
        <Card.Body>{renderParams()}</Card.Body>
      </StyledCard>
    </Col>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
`;

CaseCard.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  chosen: PropTypes.bool,
};

export default CaseCard;
