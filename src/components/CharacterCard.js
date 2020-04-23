import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className='CharacterCard'>
      <img src={props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </div>
  );
};

export default CharacterCard;
