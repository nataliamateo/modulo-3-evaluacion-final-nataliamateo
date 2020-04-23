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
      </div>
    </div>
  );
};

export default CharacterDetailPj;
