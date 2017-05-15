import React from 'react';
import { connect } from 'react-redux';

import { filterPokemonByName } from './actions';

let SearchField = ({ dispatch }) => {
  let searchInput;

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        ref={node => { searchInput = node }}
        onChange={ () => {
          if (!searchInput.value.trim()) {
            return;
          }
          console.log(searchInput.value);
          dispatch(filterPokemonByName(searchInput.value));
        }} />
    </div>
  )
}

SearchField = connect()(SearchField);

export default SearchField;
