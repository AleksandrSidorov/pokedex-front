import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestPokemons } from './actions';

import SearchFiled from './SearchField';
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
    isFetching: state.pokemons.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPokemons: () => dispatch(requestPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
