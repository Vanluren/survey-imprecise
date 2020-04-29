import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SupplierCard from "./components/SupplierCard";

const Suppliers = ({ suppliers }) => {
  const renderSuppliers = () => {
    return suppliers.map(({ supplier }) => {
      return (
        <SupplierCard
          key={supplier.supplierId}
          supplierId={supplier.supplierId}
          supplier={supplier}
          onClickHandler={onSupplierClickHandler}
          chosen={chosenSupplier === supplier.supplierId}
        />
      );
    });
  };

  return <SupplierWrapper>{renderSuppliers()}</SupplierWrapper>;
};

const SupplierWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

Suppliers.propTypes = {
  suppliers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Suppliers;
