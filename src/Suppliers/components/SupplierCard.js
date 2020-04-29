import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Col } from "react-bootstrap";

const SupplierCard = ({ supplierId, onClickHandler, chosen, supplier }) => {
  const renderParams = () =>
    supplier.parameters.map(({ indicator, descriptionOne, descriptionTwo }) => {
      return (
        <div className="">
          <h5>{indicator}</h5>
          <p>{descriptionOne}</p>
          <p>{descriptionTwo}</p>
        </div>
      );
    });
  return (
    <Col>
      <StyledCard
        onClick={() => onClickHandler(supplierId)}
        className={`${chosen ? "bg-info" : ""}`}
        text={chosen ? "light" : "dark"}
      >
        <Card.Body>
          <Card.Title>{supplier.fullName} </Card.Title>
          <Card.Text>{renderParams()}</Card.Text>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
`;

SupplierCard.propTypes = {
  supplierId: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  chosen: PropTypes.bool,
};

export default SupplierCard;
