import React from 'react';
import '../stylesheets/FilterByStatus.scss';

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
    });
  };

  return (
    <>
      <label className='status-title' htmlFor='status'>
        Estado:
      </label>
      <select className='status-value' id='status' onChange={handleChange}>
        <option value='all'>Todos</option>
        <option value='Alive'>Vivos</option>
        <option value='Dead'>Muertos</option>
        <option value='unknown'>Desconocido</option>
      </select>
    </>
  );
};

export default FilterByStatus;
