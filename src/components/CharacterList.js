import React from 'react';
import CharacterCard from './CharacterCard.js';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <section>
      <ul className='cards'>{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
