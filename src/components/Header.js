import React from 'react';
import '../stylesheets/Header.scss';
import Filters from './Filters';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header__background'></div>
      <Filters className='header__form' handleFilter={props.handleFilter} />
    </header>
  );
};

export default Header;
