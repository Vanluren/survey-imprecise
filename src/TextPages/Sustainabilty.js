import React from "react";
import TextPage from "./TextPage.container";

const Sustainabilty = () => {
  return (
    <TextPage linkTo="/phase/1">
      <h1>Lidt om bæredygtighed,</h1>
      <p>
        I spørgeskemaet skal du tage stilling til hvad der vægter højest for dig
        når vi snakker bæredygtighed. Bæredygtighed er nemlig et komplekst
        begreb, og dækker både over miljømæssige, sociale og økonomiske
        aspekter. Fødevareproducenters bæredygtighed kan vurderes ud fra 10
        parametre beskrevet nedenfor. Bare rolig, du behøver ikke nærlæse og huske hele teksten. 
        Du kan altid finde beskrivelserne ved at holde over et parameter. 
      </p>
      <ul>
        <li>
          Jordkvalitet: Frugtbarhed, PH værdi, planteudbytte og organisk stof.
        </li>
        <li>
          Husdyr: Dyrevelfærd, sundhed og frihed til at udleve normal adfærd.
        </li>
        <li>
          Næringsstoffer og miljøbeskyttelse: Næringsstoffer i jorden, luft-, jord og vandforurening.
        </li>
        <li>
          Vand: Vandkvalitet, vandkilde og vandingsintensitet.
        </li>
        <li>
          Energi og klima: Energiforbrug, energikilder og emission af drivhusgasser.
        </li>
        <li>
          Biodiversitet: Mangfoldigheden af levende organismer og størrelse af områder med Høj Naturværdi.
        </li>
        <li>
          Arbejdsvilkår: Sikkerhed, arbejdsmiljø, arbejdstider og løn hos producent og ansatte.
        </li>
        <li>
          Livskvalitet: Tilfredshed, mulighed for efteruddannelse, sociale relationer og 
          frihed til at efterleve personlige værdier såsom religion hos de ansatte.
        </li>
        <li>
          Økonomi: Indtjening, gældsafbetaling og likviditet.
        </li>
        <li>
          Bedriftsledelse: Langsigtede strategier, mål og risikostyring.
        </li>
      </ul>
    </TextPage>
  );
};

export default Sustainabilty;
