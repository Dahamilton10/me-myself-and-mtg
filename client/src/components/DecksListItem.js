import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DecksListItem(props) {
  return (
    <Dropdown.Item
      onClick={getDeckItem}
    >{props.decks.name}</Dropdown.Item>
  )
}