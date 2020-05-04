import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TextPage from "./TextPage.container";
import { saveOccupation } from "../State/provider";

const Respondant = () => {
  const [inputVal, setInputVal] = useState("");
  const history = useHistory();
  const placeholders = ["Kok", "Souschef", "Levemand", "Landmand", "Indkøber"];
  const placeholderText =
    "F.eks. " + placeholders[Math.floor(Math.random() * placeholders.length)];

  const onNextClickHandler = () => {
    saveOccupation(inputVal);
    return history.push("/sustainability");
  };

  return (
    <TextPage
      buttonText="Gem og fortsæt"
      btnDisabled={inputVal.length <= 0}
      onNextClick={() => onNextClickHandler()}
    >
      <h1>Hvem er du?</h1>
      <p>
        Først skal vi bruge lidt information om, hvad du arbejder med. Dette er
        det eneste persondata vi skal bruge på dig.
      </p>
      <label htmlFor="occupation">Hvad laver du til dagligt?</label>
      <InputGroup>
        <FormControl
          size="lg"
          type="text"
          id="occupation"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder={placeholderText}
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
      </InputGroup>
    </TextPage>
  );
};
export default Respondant;
