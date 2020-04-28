import React from 'react';
import styled from 'styled-components';
import { Row, Jumbotron, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <Container>
      <Row>
        <Col xs={10}>
          <HeaderSection>
            <h1>Hejsa,</h1>
            <p>
              Vi er to studerende der er ved at skrive vores bachelor i IT. Vi arbejder med et tema omkring hvordan caféer, restauranter og lignende kan vælge
              bæredygtige leverandører. Vi laver et IT-system der kan anbefale leverandører ud fra køberens holdning til bæredygtighed. Formålet med dette
              spørgeskema er, at dine svar skal bruges til at teste hvor godt vores system er til at lære dine præferencer i forhold til bæredygtighed.
              Spørgeskemaet er delt op i faser. I fase 1 bliver du præsenteret for to leverandører. Du vil kort blive forklaret hvor bæredygtige de er på to
              eller tre parametre indenfor miljø, social og økonomisk bæredygtighed. Du skal blot klikke på den leverandør du ville vælge. I fase to vil du
              blive præsenteret for 5 leverandører på samme vis. Her skal du rangere dem i forhold til hvem du vil være mest tilbøjelig til at vælge, og hvem du
              ville være mindst tilbøjelig til at vælge.
            </p>
            <p>Du vil nu blive præsenteret for leverandører to ad gangen. Klik på den leverandør du vil vælge ud fra de informationer du er givet.</p>
            <p>
              Du vil nu blive præsenteret for leverandører fem ad gangen. Rangér leverandørerne efter hvem du vil være mest tilbøjelig til at vælge ud fra den
              information du er givet. Den leverandør du helst vil have skal du give en 1. plads og den du mindst vil have skal du give en 5. plads.
            </p>
            <Link to="/question/1">
              <Button variant="primary">Start spørgeskema</Button>
            </Link>
          </HeaderSection>
        </Col>
      </Row>
    </Container>
  );
};

const HeaderSection = styled.section`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

export default Intro;
