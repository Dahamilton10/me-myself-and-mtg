// This is an individual entry on the decklist that shows
// up on the left hand side of the page

import React from 'react';
import { Button, } from 'react-bootstrap';

export default function DeckList(props) {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>{props.deckListItem.name}</td>
        <td>{props.deckListItem.CMC}</td>
        <td><Button
          onClick={() => props.removeCard(props.deckList.id)}
          className="btn btn-danger btn-sm">-</Button></td>
      </tr>
    </>

  );
}
