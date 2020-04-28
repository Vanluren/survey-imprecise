import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Col } from 'react-bootstrap';
import StateContext from '../../State/context';

const SupplierCard = ({ supplierId, onClickHandler, chosen }) => {
  const { suppliers } = useContext(StateContext);
  const supplier = suppliers[supplierId];
  return (
    <Col>
      <StyledCard onClick={() => onClickHandler(supplierId)} className={`${chosen ? 'bg-info' : ''}`} text={chosen ? 'light' : 'dark'}>
        <Card.Body>
          <Card.Title>{supplier.name} </Card.Title>
          <Card.Text>
            <div className="bg-warning">
              <h5>Jordkvalitet - Medium bæredygtighed</h5>
              <p>Jorden er meget komprimeret hvilket ikke er godt</p>
              <p>Planteudbyttet på jorden er god</p>
            </div>

            <div className="bg-success">
              <h5>Husdyrs livskvalitet - God bæredygtighed</h5>
              <p>Dyrene har høj gennemsnitlig levealder</p>
              <p> Dyreproduktionen er økologisk</p>
            </div>
          </Card.Text>
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
