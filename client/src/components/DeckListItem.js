// This is an individual entry on the decklist that shows
// up on the left hand side of the page

import React from 'react';

export default function DeckList(props) {
  return (
    <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4 text-right">
            <button
              onClick={() => props.removeCard(props.deckList.id)}
              className="btn btn-danger btn-sm">-</button>
          </div>
        </div>
      </li>
    </>

  );
}