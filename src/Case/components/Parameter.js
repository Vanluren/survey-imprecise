import React from "react";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Parameter = ({
  descriptionOne,
  descriptionTwo,
  indicator,
  score,
}) => {
  const toolTipTexts = {
    good: "Good",
    ok: "Ok",
    bad: "Bad",
  };
  const indicatorColor =
    score > 70 ? "bg-success" : score >= 45 ? "bg-warning" : "bg-danger";
  const tooltipText =
    score > 70
      ? toolTipTexts.good
      : score >= 45
      ? toolTipTexts.ok
      : toolTipTexts.bad;

  return (
    <div>
      <ParameterHeader>
        <h5>
          {indicator} - {score}/100
        </h5>

        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">{tooltipText}</Tooltip>}
        >
          <IndiCatorColor className={indicatorColor} />
        </OverlayTrigger>
      </ParameterHeader>
      <p>- {descriptionOne}</p>
      <p>- {descriptionTwo}</p>
    </div>
  );
};

const ParameterHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IndiCatorColor = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 8px;
  margin: 10px 10px 15px 10px;
`;

export default Parameter;
