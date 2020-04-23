import React from 'react';
import CharacterCard from './CharacterCard.js';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => (
    <li key={character.id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul>{characterElements}</ul>;
};

export default CharacterList;
