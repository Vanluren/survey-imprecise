import React from "react";
import TextPage from "./TextPage.container";

const PhaseTwo = () => {
  return (
    <TextPage linkTo="/ranking">
      <h1>I anden fase,</h1>
      <p>
        bliver du vist 5 leverandører på samme måde som før. Her vil du blive
        bedt om at rangere leverandørerne i forhold til hinanden alt efter hvilke 
        du har mest lyst til at handle med. Den
        leverandør du helst vil handle med, skal du give 1. prioritet, og den du
        mindst vil handle med, skal du give 5. prioritet.
      </p>
      <p>
        Dine valg her skal bruges til at teste hvor præcist vores system kan
        anbefale leverandører til dig.
      </p>
    </TextPage>
  );
};

export default PhaseTwo;
