import React from 'react';
import '../stylesheets/CharacterDetailPj.scss';
import { Link } from 'react-router-dom';

const CharacterDetailPj = (props) => {
  return (
    <div className='detail'>
      <div className='detail__card'>
        <Link to='/'>
          <button className='detail__card--btn'>Volver</button>
        </Link>
        <div className='detail__data'>
          <div>
            <img className='container__image' src={props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
          </div>
          <div className='container'>
            <ul className='container__list'>
              <li className='container__list--item'> {props.character.name}</li>
              <li className='container__list--item'>Status: {props.character.status}</li>
              <li className='container__list--item'>Especie: {props.character.species}</li>
              <li className='container__list--item'>Origen: {props.character.origin}</li>
              <li className='container__list--item'>Espisodios: {props.character.episode}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPj;
