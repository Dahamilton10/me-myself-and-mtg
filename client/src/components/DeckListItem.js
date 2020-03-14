// This is an individual entry on the decklist that shows
// up on the left hand side of the page

import React from 'react';
import { Button, } from 'react-bootstrap';

const divStyle = {
  // backgroundImage : url(`../pics/${props.deckListItem.SetCode}/${props.deckListItem.id}.jpg`)
};

export default function DeckList(props) {
  return (
    <div
      className='deckListItem'
      style={divStyle}
      onClick={() => props.removeCard(props.deckList.id)}
      >
    </div>
  );
}

