import React from 'react';
import '../stylesheets/CharacterDetailPj.scss';
import { Link } from 'react-router-dom';
import Alien from '../images/alien.png';

const CharacterDetailPj = (props) => {
  const getStatus = () => {
    if (props.character.status === 'Alive') {
      return <i className='fas fa-heartbeat'></i>;
    } else if (props.character.status === 'Dead') {
      return <i className='far fa-dizzy'></i>;
    } else {
      return <i className='fas fa-question'></i>;
    }
  };

  const getSpecies = () => {
    return props.character.species === 'Human' ? <i className='fas fa-male'></i> : <img className='alien' src={Alien} alt='Icono de alien' />;
  };

  return (
    <div className='detail'>
      <div className='detail__card'>
        <Link to='/'>
          <button className='detail__card--btn' title='Ir a la home'>
            Volver
          </button>
        </Link>
        <div className='detail__data'>
          <div>
            <img className='container__image' src={props.character.image} alt={`Foto de ${props.character.name}`} title={`Foto de ${props.character.name}`} />
          </div>
          <div className='container'>
            <ul className='container__list'>
              <li className='container__list--item'> {props.character.name}</li>
              <li className='container__list--item'>
                Status: {props.character.status} {getStatus()}
              </li>
              <li className='container__list--item'>
                Especie: {props.character.species}
                {getSpecies()}
              </li>
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
