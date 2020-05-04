import React from 'react';

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
      <label htmlFor='status'></label>
      <select id='status' onChange={handleChange}>
        <option value='all'>todos</option>
        <option value='Alive'>vivos</option>
        <option value='Dead'>muerto</option>
        <option value='unknown'>desconocido</option>
      </select>
    </>
  );
};

export default FilterByStatus;
