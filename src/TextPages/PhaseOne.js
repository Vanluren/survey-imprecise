import React from "react";
import TextPage from "./TextPage.container";

const PhaseOne = () => {
  return (
    <TextPage linkTo="/questions">
      <h1>I første fase</h1>
      <p>
        af spørgeskemaet bliver du vist to leverandører.
        Hver leverandør er beskrevet med 3 af bæredygtighedsparametre fra sidste
        side. Ud fra farven og teksten på parametrene kan du se hvor bæredygtige
        leverandørerne indenfor dise områder. Du skal blot
        vælge den leverandør du helst vil handle fra ud fra denne information.
      </p>
      <p>
        Dine valg vil lære vores IT-system om dine præferencer indenfor
        bæredygtighed. Dette vil systemet bruge til at anbefale leverandører til
        dig.
      </p>
    </TextPage>
  );
};

export default PhaseOne;
