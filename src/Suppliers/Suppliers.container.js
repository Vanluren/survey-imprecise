import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SupplierCard from './components/SupplierCard';

const Suppliers = ({ suppliers }) => {
  const [chosenSupplier, setChosenSupplier] = useState(null);
  const onSupplierClickHandler = (supplierId) => {
    setChosenSupplier(supplierId);
    return console.log(supplierId);
  };
  const renderSuppliers = () => {
    return suppliers.map((id) => <SupplierCard key={id} supplierId={id} onClickHandler={onSupplierClickHandler} chosen={chosenSupplier === id} />);
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
