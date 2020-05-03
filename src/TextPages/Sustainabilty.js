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
          Jordkvalitet: Jordens kvalitet og frugtbarhed skal bevares. Her ses på
          ting såsom hvor meget organisk stof der er i jorden og hvor stort
          udbytte der opnås på de planter der dyrkes.
        </li>
        <li>
          Husdyr: Husdyr skal holdes på en måde der sikrer velfærd og ikke
          skader miljøet. Dyrene skal have fem friheder: frihed til at få dækket
          sult og tørst, fri for ubehag, fri for smerte, skade eller sygdom,
          frihed til at udleve normal adfærd, og fri for frygt og nød.
        </li>
        <li>
          Næringsstoffer og miljøbeskyttelse: Her ses på næringsstofferne i
          jorden samt forurening af nærmiljø. Dette kan være luftforurening fra
          maskiner eller gødning der løber ud i vandløb.
        </li>
        <li>
          Vand: Vand er ikke en ubegrænset ressource, selvom vi i Danmark har
          meget af det. Her ses på vandkvaliteten og mængden af vand der bruges
          hos producenten.
        </li>
        <li>
          Husdyr: Husdyr skal holdes på en måde der sikrer velfærd og ikke
          skader miljøet. Dyrene skal have fem friheder: frihed til at få dækket
          sult og tørst, fri for ubehag, fri for smerte, skade eller sygdom,
          frihed til at udleve normal adfærd, og fri for frygt og nød.
        </li>
        <li>
          Biodiversitet: Mangfoldigheden af levende organismer og sundheden i
          økosystemer er tæt forbundet. Faktisk er landbrugsproduktion kun mulig
          takket være kredsløb af næringsstoffer og luftarter, bestøvning og
          andre funktioner, udført af omkringliggende økosystemer.
        </li>
        <li>
          Arbejdsvilkår: For at være bæredygtig skal produktionen værne om sine
          ansatte, så de ikke bliver nedslidte eller siger op. Her ses blandt
          andet på arbejdstider, sikkerhed og løn for de ansatte.
        </li>
        <li>
          Livskvalitet: Tilfredshed blandt producent og medarbejdere er vigtigt
          for den sociale og økonomiske bæredygtighed. Her ses der på
          tilfredshed omkring uddannelse og efteruddannelse, sociale relationer
          og frihed til at efterleve personlige værdier såsom religion.
        </li>
        <li>
          Økonomi: En produktion med dårlig økonomi kan ikke leve for evigt.
          Derfor er dette et vigtigt punkt for en bæredygtig produktion.
        </li>
        <li>
          Bedriftsledelse: Dette punkt ser på, om produktionen har strategier og
          mål på den lange bane. Hvis de ikke har kan uforudsete problemer lukke
          produktionen ned.
        </li>
      </ul>
    </TextPage>
  );
};

export default Sustainabilty;
