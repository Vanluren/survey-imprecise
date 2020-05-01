import React from "react";
import TextPage from "./TextPage.container";

const Intro = () => {
  return (
    <TextPage linkTo="/hvem-er-du" buttonText="Start spørgeskema">
      <h1>Hejsa,</h1>
      <p>
        Velkommen til vores spørgeskema! Vi er to IT-studerende der er ved at
        skrive bachelor om bæredygtighed. Vi udvikler et program der skal kunne
        anbefale bæredygtige leverandører til små caféer, restauranter mm.
      </p>
      <p>
        Dette spørgeskema er delt op i to dele: Første del skal du vælge imellem
        to leverandører på baggrund af nogle parametre om, hvor bæredygtige de
        er. Anden del får du 5 leverandører du skal rangere i forhold til
        hvilken du ville være mest tilbøjelig til at vælge.
      </p>
      <p>Spørgeskemaet er anonymt og tager ca. 15 minutter at besvare</p>
    </TextPage>
  );
};

export default Intro;
