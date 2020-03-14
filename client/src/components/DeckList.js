// This is what will hold the decklistitems 

import React from 'react';
import DeckListItem from './DeckListItem';
import { Table } from 'react-bootstrap';

export default function DeckList(props) {
  return (
    <div>
        {props.deckList.map((deckListItem) =>
          <DeckListItem
            key={deckListItem.id}
            deckList={deckListItem}
            removeCard={props.removeCard}
          />
        )}
    </div>
  );
}
