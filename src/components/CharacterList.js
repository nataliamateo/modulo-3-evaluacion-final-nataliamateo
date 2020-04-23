import React from 'react';
import CharacterCard from './CharacterCard.js';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div>
        <h2>Personaje no encontrado</h2>
      </div>
    );
  } else {
    const characterElements = props.characters.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
    return (
      <section>
        <ul className='cards'>{characterElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
