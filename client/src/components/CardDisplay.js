import React from 'react';
import CardItem from '../components/CardItem'

export default function CardDisplay(props) {
  return (
    <>
      <ul className="list-group">
        {props.cardList.map((card) =>
          <CardItem
            key={card.name}
            card={card}
          />
        )}
      </ul>
    </>
  );
}