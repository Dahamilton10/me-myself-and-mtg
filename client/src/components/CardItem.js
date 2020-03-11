import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`../../public/pics/${props.card.SetCode}/${props.card.id}.jpg`} />
      <Card.Body>
        <Button variant="primary"
        onClick={props.addDeckItem}
        >Add</Button>
      </Card.Body>
    </Card>
  );
}