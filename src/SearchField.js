import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

import { filterPokemonByName } from './actions';

let SearchField = ({ dispatch }) => (
  <Input
    placeholder="Filter by name"
    onChange={e => dispatch(filterPokemonByName(e.target.value))}
  />
);

export default connect()(SearchField);
