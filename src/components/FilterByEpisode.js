import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/FilterByEpisode.scss';

const FilterByEpisode = (props) => {
  const handleChange = (ev) => {
    console.log(ev.target.value);

    props.handleFilter({
      value: ev.target.value,
      key: 'episode',
    });
  };

  return (
    <>
      <label htmlFor='episode'></label>
      <input className='form__input-episode' id='episode' placeholder='Número de episodios' name='episode' type='number' onChange={handleChange}></input>
    </>
  );
};

FilterByEpisode.propTypes = {
  input: PropTypes.number,
};

export default FilterByEpisode;
