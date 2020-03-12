// This is what will hold the decklistitems 

import React from 'react';
import DeckListItem from './DeckListItem';
import { Table } from 'react-bootstrap';

export default function DeckList(props) {
  return (
    <Table variant='dark'>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">CMC</th>
        </tr>
      </thead>
      <tbody>
        {props.deckList.map((deckListItem) =>
          <DeckListItem
            deckList={deckListItem}
            removeCard={props.removeCard}
          />
        )}
      </tbody>
    </Table>
  );
}
