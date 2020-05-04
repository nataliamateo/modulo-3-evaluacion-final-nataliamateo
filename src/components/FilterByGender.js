import React from 'react';
import '../stylesheets/FilterByGender.scss';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };

  return (
    <>
      <label className='gender-title' htmlFor='gender'>
        Género
      </label>
      <select className='gender-value' id='gender' name='gender' onChange={handleChange}>
        <option value='all' defaultChecked>
          Todos
        </option>
        <option value='Male'>Hombre</option>
        <option value='Female'>Mujer</option>
        <option value='unknown'>Desconocido</option>
      </select>
    </>
  );
};

export default FilterByGender;
