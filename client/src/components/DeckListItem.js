// This is an individual entry on the decklist that shows
// up on the left hand side of the page

import React from 'react';
import { Button, } from 'react-bootstrap';

export default function DeckList(props) {
  return (
    <div
      className='deckListItem'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/pics/${props.deckList.SetCode}/${props.deckList.CardId}.jpg)`}}
      onClick={() => props.removeCard(props.deckList.id)}
      >
    </div>
  );
}

