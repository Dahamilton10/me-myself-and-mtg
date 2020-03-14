import React from 'react';
import CardItem from '../components/CardItem'
import { Col, Container } from 'react-bootstrap';

export default function CardDisplay(props) { 
  return (
    <>
      <Col>
        <Container fluid>
          {props.cardList.map((card) =>
            <CardItem
              key={card.id}
              card={card}
            />
          )}
        </Container>
      </Col>
    </>
  );
}