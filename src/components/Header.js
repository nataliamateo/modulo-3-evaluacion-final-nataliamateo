import React from 'react';
import '../stylesheets/Header.scss';
import Filters from './Filters';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__background'></div>
      <Filters className='header__form' />
    </header>
  );
};

export default Header;
