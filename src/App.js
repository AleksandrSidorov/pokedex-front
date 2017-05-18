import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  requestPokemons,
  requestMorePokemons,
  addTypeToFilter,
  removeTypeFromFilter,
} from './actions';

import SearchFiled from './SearchField';
import FilterByType from './FilterByType';
import PokemonsList from './PokemonsList';
import LoadMore from './LoadMore';

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
        <LoadMore
          requestMorePokemons={this.props.requestMorePokemons}
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
    requestMorePokemons: () => dispatch(requestMorePokemons()),
    addTypeToFilter: (typeName) => dispatch(addTypeToFilter(typeName)),
    removeTypeFromFilter: (typeName) => dispatch(removeTypeFromFilter(typeName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
