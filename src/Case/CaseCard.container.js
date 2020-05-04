import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Parameter from "./components/Parameter";

const CaseCard = ({ caseInfo, onClickHandler, chosen, idx }) => {
  const renderParams = () => {
    const sortedArr = caseInfo.caseParameters.sort((a, b) => {
      if (a.parameter.indicator < b.parameter.indicator) {
        return -1;
      }
      if (a.parameter.iindicator > b.parameter.indicator) {
        return 1;
      }
      return 0;
    });
    return sortedArr.map(({ parameter, parameterId }) => {
      return (
        <Parameter
          key={parameterId}
          indicator={parameter.indicator}
          score={parameter.score}
          descriptionOne={parameter.descriptionOne}
          descriptionTwo={parameter.descriptionTwo}
        />
      );
    });
  };

  return (
    <StyledCard
      onClick={() => onClickHandler(caseInfo.caseId)}
      className={`${chosen ? "bg-info" : ""}`}
      text={chosen ? "light" : "dark"}
    >
      <StyledCardHeader>
        Leverandør {idx % 2 === 0 ? "a" : "b"}
      </StyledCardHeader>
      <Card.Body>{renderParams()}</Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
`;

const StyledCardHeader = styled(Card.Header)`
  text-transform: capitalize;
`;

CaseCard.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  chosen: PropTypes.bool,
};

export default React.memo(CaseCard);
