import React from 'react';
import FilterByName from './FilterByName';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filters;
