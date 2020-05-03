import React from "react";
import { Row, Col } from "react-bootstrap";

const SupplierSelect = ({ cases }) => {
  const alpha = ["a", "b", "c", "d", "e"];
  const renderOptions = () => {
    const defaultArr = [{ name: "Vælg leverandører" }].map((value) => {
      return (
        <option value="" selected disabled hidden>
          {value.name}
        </option>
      );
    });

    const arr = cases.map(({ case: { caseId } }, idx) => {
      return (
        <option
          style={{ textTransform: "capitalize" }}
          disabled={false}
          value={caseId}
        >
          Leverandør {alpha[idx]}
        </option>
      );
    });
    return [...defaultArr, ...arr];
  };
  return (
    <>
      {cases.map((_, idx) => (
        <Row
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <Col xs={1}>
            <h4>{idx + 1}.</h4>
          </Col>
          <Col xs={11}>
            <Form></Form>
            <Form.Control
              as="select"
              size="lg"
              custom
              onChange={(event) => {
                return setRanks({
                  ...ranks,
                  [idx]: event.target.value,
                });
              }}
            >
              {renderOptions()}
            </Form.Control>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default SupplierSelect;
