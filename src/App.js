import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  requestPokemons,
  addTypeToFilter
} from './actions';

import SearchFiled from './SearchField';
import FilterByType from './FilterByType';
import PokemonsList from './PokemonsList';

class App extends Component {

  componentDidMount() {
    this.props.requestPokemons();
  }

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        <SearchFiled />
        <FilterByType typeFilter={this.props.typeFilter} />
        <PokemonsList
          pokemons={this.props.pokemons}
          nameFilter={this.props.nameFilter}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    pokemons: state.pokemons.pokemons,
    nameFilter: state.pokemons.nameFilter,
    isFetching: state.pokemons.isFetching,
    typeFilter: state.pokemons.typeFilter,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPokemons: () => dispatch(requestPokemons()),
    addTypeToFilter: (typeName) => dispatch(addTypeToFilter(typeName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
