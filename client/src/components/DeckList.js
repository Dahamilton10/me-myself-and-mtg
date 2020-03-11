// This is what will hold the decklistitems 
// will also have the mana curve

import React from 'react';
import Decklistitem from './DeckListItem'

export default function DeckList(props) {
  return (
    <>
      <ul className="list-group">
        {props.deckList.map((deckList) =>
          <Decklistitem
            key={deckList.id}
            deckList={deckList}
            removeCard={props.removeCard}
          />
        )}
      </ul>

    </>
  );
}