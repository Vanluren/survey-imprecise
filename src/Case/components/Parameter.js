import React from "react";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { indicatorTypes } from "../../utils/indictor-types";
import { toolTipTexts, toolTipTextsLong } from "../../utils/tooltip-texts";

export const Parameter = ({
  descriptionOne,
  descriptionTwo,
  indicator,
  score,
  scoreLong,
}) => {
  const indicatorColor =
    score > 67 ? "bg-success" : score >= 33 ? "bg-warning" : "bg-danger";

  const tooltipText =
    score > 67
      ? toolTipTexts.good
      : score >= 33
      ? toolTipTexts.ok
      : toolTipTexts.bad;

  const tooltipTextLong =
    score > 75
      ? toolTipTextsLong.perfekt
      : score >= 50
      ? toolTipTextsLong.good
      : score >= 25
      ? toolTipTextsLong.bad
      : toolTipTextsLong.reallyBad;

  return (
    <div>
      <ParameterHeader>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">
              {indicatorTypes[indicator].desc}
            </Tooltip>
          }
        >
          <h5>{indicatorTypes[indicator].name} </h5>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-diabled">
              {scoreLong ? tooltipTextLong.desc : tooltipText.desc}
            </Tooltip>
          }
        >
          <Score className={`${indicatorColor} text-light`}>
            {scoreLong ? tooltipTextLong.name : tooltipText.name}
          </Score>
        </OverlayTrigger>
      </ParameterHeader>
      {descriptionOne && descriptionTwo && (
        <ul>
          <li>{descriptionOne}</li>
          <li>{descriptionTwo}</li>
        </ul>
      )}
    </div>
  );
};

const ParameterHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Score = styled.p`
  padding: 0 8px;
  margin: 0 0 7px 8px;
  text-transform: capitalize;
`;
export default Parameter;
