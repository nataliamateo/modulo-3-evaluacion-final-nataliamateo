import React from 'react';
import '../stylesheets/FilterByName.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
      checked: ev.target.checked,
    });
  };

  return (
    <>
      <h2>Especie</h2>
      <div>
        <label htmlFor='all'>Todos</label>
        <input className='' id='Species' name='Species' type='radio' value='all' onChange={handleChange} defaultChecked></input>
      </div>
      <div>
        <label htmlFor='Human'>Humano</label>
        <input className='' id='Species' name='Species' type='radio' value='Human' onChange={handleChange}></input>
      </div>
      <div>
        <label htmlFor='Alien'>Alien</label>
        <input className='' id='Species' name='Species' type='radio' value='Alien' onChange={handleChange}></input>
      </div>
    </>
  );
};

export default FilterByName;
