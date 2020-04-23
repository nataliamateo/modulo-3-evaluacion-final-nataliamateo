import React from 'react';
import '../stylesheets/CharacterDetailPj.scss';
import { Link } from 'react-router-dom';

const CharacterDetailPj = (props) => {
  return (
    <>
      <Link to='/'>
        <span>
          <i class='fas fa-home'></i>
        </span>
      </Link>
      <div className='card-detail'>
        <div className='container'>
          <img className='container__image' src='https://via.placeholder.com/150' alt='' title='' />
        </div>
        <div className='container'>
          <ul className='container__list'>
            <li className='container__list--item'>Status: Alive</li>
            <li className='container__list--item'>Especie: Human</li>
            <li className='container__list--item'>Origen: planeta tierra</li>
            <li className='container__list--item'>Espisodios: </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CharacterDetailPj;
