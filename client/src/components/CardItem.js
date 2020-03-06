import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.card.imageUrl} />
      <Card.Body>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
}