import React from 'react';
import '../stylesheets/FilterByName.scss';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <>
      <label htmlFor='name'></label>
      <input className='form__input-text' id='name' placeholder='Busca tu personaje' name='name' value={props.nameFilter} onChange={handleChange} onKeyDown={handleChange}></input>
    </>
  );
};

FilterByName.propTypes = {
  input: PropTypes.string,
};

export default FilterByName;
