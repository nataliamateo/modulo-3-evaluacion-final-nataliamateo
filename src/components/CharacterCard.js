import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <li className='card'>
      <Link to={`/character/${props.character.id}`}>
        <img className='card__image' src={props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
        <p className='card__name'>{props.character.name}</p>
        <p className='card__species'>{props.character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
