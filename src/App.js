import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  requestPokemons,
  addTypeToFilter,
  removeTypeFromFilter,
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
        <FilterByType
          typeFilter={this.props.typeFilter}
          removeTypeFromFilter={this.props.removeTypeFromFilter}
        />
        <PokemonsList
          pokemons={this.props.pokemons}
          nameFilter={this.props.nameFilter}
          typeFilter={this.props.typeFilter}
          addTypeToFilter={this.props.addTypeToFilter}
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
    removeTypeFromFilter: (typeName) => dispatch(removeTypeFromFilter(typeName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
