import React from 'react';
import '../stylesheets/CharacterDetailPj.scss';

const CharacterDetailPj = (props) => {
  return (
    <div>
      <div className='card-detail'>
        <div className='container'>
          <img className='container__image' src='https://via.placeholder.com/150' alt='' title='' />
        </div>
        <div className='container'>
          <ul className='container__list'>
            Nombre
            <li className='container__list--item'>Status: Alive</li>
            <li className='container__list--item'>Especie: Human</li>
            <li className='container__list--item'>Origen: planeta tierra</li>
            <li className='container__list--item'>Espisodios: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPj;
