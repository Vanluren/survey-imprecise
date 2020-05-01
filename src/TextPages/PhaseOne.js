import React from "react";
import TextPage from "./TextPage.container";

const PhaseOne = () => {
  return (
    <TextPage linkTo="/questions">
      <h1>I første fase,</h1>
      <p>
        af spørgeskemaet bliver du vist to leverandører som vist på billedet.
        Hver leverandør er listet op med af bæredygtighedsparametrene fra sidste
        side. Ud fra farven og teksten på parametrene kan du se hvordan
        leverandørerne klarer sig på bæredygtighedsparametrene. Du skal blot
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
