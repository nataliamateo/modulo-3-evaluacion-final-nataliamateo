import React from 'react';

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
      <input id='character' placeholder='Busca tu personaje' name='name' onChange={handleChange} onKeyDown={handleChange}></input>
    </>
  );
};

export default FilterByName;
