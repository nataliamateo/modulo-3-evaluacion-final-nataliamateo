import React from 'react';
import FilterByName from './FilterByName';
import '../stylesheets/Filters.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByGender from './FilterByGender';
import FilterByEpisode from './FilterByEpisode';
import FilterByStatus from './FilterByStatus';

const Filters = (props) => {
  // avoy submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} nameFilter={props.nameFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
      <div className='form__selects'>
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterByStatus handleFilter={props.handleFilter} />
      </div>
      <FilterByEpisode handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filters;
