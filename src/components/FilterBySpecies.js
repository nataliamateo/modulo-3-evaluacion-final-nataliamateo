import React from 'react';
import '../stylesheets/FilterBySpecies.scss';

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
      <div className='species'>
        <h2 className='species__title'>Especies:</h2>
        <div className='species__radios'>
          <div>
            <label className='species__radios--title' htmlFor='all'>
              Todos
            </label>
            <input className='species__radios--all' id='Species' name='Species' type='radio' value='all' onChange={handleChange} defaultChecked></input>
          </div>
          <div>
            <label className='species__radios--title' htmlFor='Human'>
              Humanos
            </label>
            <input className='species__radios--all' id='Species' name='Species' type='radio' value='Human' onChange={handleChange}></input>
          </div>
          <div>
            <label className='species__radios--title' htmlFor='Alien'>
              Aliens
            </label>
            <input className='species__radios--all' id='Species' name='Species' type='radio' value='Alien' onChange={handleChange}></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByName;
