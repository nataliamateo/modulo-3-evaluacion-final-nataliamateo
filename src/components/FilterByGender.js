import React from 'react';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };

  return (
    <>
      <label htmlFor='gender'>Género</label>
      <select id='gender' name='gender' onChange={handleChange}>
        <option value='all'>Todos</option>
        <option value='Male'>Hombre</option>
        <option value='Female'>Mujer</option>
        <option value='unknown'>Desconocido</option>
      </select>
    </>
  );
};

export default FilterByGender;
