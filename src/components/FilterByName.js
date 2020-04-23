import React from 'react';
import '../stylesheets/FilterByName.scss';

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
      <input className='form__input-text' id='name' placeholder='Busca tu personaje' name='name' onChange={handleChange} onKeyDown={handleChange}></input>
    </>
  );
};

export default FilterByName;
