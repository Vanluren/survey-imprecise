import React from "react";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Parameter = ({
  descriptionOne,
  descriptionTwo,
  indicator,
  score,
}) => {
  const indicatorTypes = {
    Soil: "Jordkvalitet",
    Husbandry: "Husdyr",
    Nutrients: "Næringsstoffer og miljøbeskyttelse",
    Biodiversity: "Biodiversitet",
    Lifequality: "Livskvalitet",
    Water: "Vand",
    Energy: "Energi og klima",
    Economy: "Økonomi",
    Workconditions: "Arbejdsvilkår",
    Management: "Bedriftsledelse og strategi",
  };

  const toolTipTexts = {
    good: "En score over 70 ud af 100, regnes som god.",
    ok: "En score mellem 45 og 70 ud af 100, regnes som ok.",
    bad: "En score under 45 ud af 100 regnes som dårlig.",
  };

  const indicatorColor =
    score > 67 ? "bg-success" : score >= 33 ? "bg-warning" : "bg-danger";

  const tooltipText =
    score > 67
      ? toolTipTexts.good
      : score >= 33
      ? toolTipTexts.ok
      : toolTipTexts.bad;

  return (
    <div>
      <ParameterHeader>
        <h5>{indicatorTypes[indicator]} </h5>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">{tooltipText}</Tooltip>}
        >
          <Score className={`${indicatorColor} text-light`}>
            {score > 67 ? "God" : score >= 33 ? "Medium" : "Dårlig"}
          </Score>
        </OverlayTrigger>
      </ParameterHeader>
      <ul>
        <li>{descriptionOne}</li>
        <li>{descriptionTwo}</li>
      </ul>
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
`;
export default Parameter;
