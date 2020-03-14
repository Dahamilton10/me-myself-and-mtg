import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DecksListItem(props) {
  return (
    <Dropdown.Item
      onClick={() => props.dropDownFunction(props.deck)}
    >{props.deck.name}</Dropdown.Item>
  )
}