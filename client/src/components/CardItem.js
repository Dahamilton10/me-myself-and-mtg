import React from 'react';
import { Card } from 'react-bootstrap';


export default function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/pics/${props.card.SetCode}/${props.card.id}.jpg`}
        onClick={props.addDeckItem}
      />
    </Card>
  );
}
