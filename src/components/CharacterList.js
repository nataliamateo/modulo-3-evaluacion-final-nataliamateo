import React from 'react';
import CharacterCard from './CharacterCard.js';
import '../stylesheets/CharacterList.scss';
import Morty from '../images/morty-sad.png';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div className='container-notfound'>
        <img className='container-notfound__img' src={Morty} alt='Morty triste' />
        <div className='container-notfound__text'>
          <h2>Personaje no encontrado</h2>
          <p>Introduzca otra búsqueda</p>
        </div>
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
